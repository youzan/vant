import { UNSELECTED_SKU_VALUE_ID } from '../constants';

/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */
export const normalizeSkuTree = (skuTree) => {
  const normalizedTree = {};
  skuTree.forEach((treeItem) => {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
};

export const normalizePropList = (propList) => {
  const normalizedProp = {};
  propList.forEach((item) => {
    const itemObj = {};
    item.v.forEach((it) => {
      itemObj[it.id] = it;
    });
    normalizedProp[item.k_id] = itemObj;
  });
  return normalizedProp;
};

// 判断是否所有的sku都已经选中
export const isAllSelected = (skuTree, selectedSku) => {
  // 筛选selectedSku对象中key值不为空的值
  const selected = Object.keys(selectedSku).filter(
    (skuKeyStr) => selectedSku[skuKeyStr] !== UNSELECTED_SKU_VALUE_ID
  );
  return skuTree.length === selected.length;
};

// 根据已选择的 sku 获取 skuComb
export const getSkuComb = (skuList, selectedSku) => {
  const skuComb = skuList.filter((item) =>
    Object.keys(selectedSku).every(
      (skuKeyStr) => String(item[skuKeyStr]) === String(selectedSku[skuKeyStr])
    )
  );
  return skuComb[0];
};

// 获取已选择的sku名称
export const getSelectedSkuValues = (skuTree, selectedSku) => {
  const normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce((selectedValues, skuKeyStr) => {
    const skuValues = normalizedTree[skuKeyStr] || [];
    const skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== UNSELECTED_SKU_VALUE_ID && skuValues.length > 0) {
      const skuValue = skuValues.filter((value) => value.id === skuValueId)[0];
      skuValue && selectedValues.push(skuValue);
    }
    return selectedValues;
  }, []);
};

// 判断sku是否可选
export const isSkuChoosable = (skuList, selectedSku, skuToChoose) => {
  const { key, valueId } = skuToChoose;

  // 先假设sku已选中，拼入已选中sku对象中
  const matchedSku = {
    ...selectedSku,
    [key]: valueId,
  };

  // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中
  const skusToCheck = Object.keys(matchedSku).filter(
    (skuKey) => matchedSku[skuKey] !== UNSELECTED_SKU_VALUE_ID
  );

  const filteredSku = skuList.filter((sku) =>
    skusToCheck.every(
      (skuKey) => String(matchedSku[skuKey]) === String(sku[skuKey])
    )
  );

  // 检查是否有非禁用的SKU可选
  const availableSku = filteredSku.filter((sku) => sku.disable_status !== 1);

  const stock = availableSku.reduce((total, sku) => {
    total += sku.stock_num;
    return total;
  }, 0);
  return stock > 0;
};

// 根据disable_status字段过滤skuTree
export const filterDisabledSkuTree = (skuTree, skuList, selectedSku = {}) => {
  if (!skuList?.length) {
    return skuTree;
  }

  // 创建规格树的深拷贝，避免修改原始数据
  const treeClone = JSON.parse(JSON.stringify(skuTree));

  // 对每个规格值，收集所有包含它的SKU
  const specValueToSkus = {};

  // 初始化规格值到SKU的映射
  treeClone.forEach((treeItem) => {
    const key = treeItem.k_s;
    treeItem.v.forEach((value) => {
      const valueId = value.id;
      specValueToSkus[`${key}-${valueId}`] = [];
    });
  });

  // 收集每个规格值对应的所有SKU
  skuList.forEach((item) => {
    for (let i = 1; i <= 5; i++) {
      const key = `s${i}`;
      const value = item[key];
      if (value && value !== '0') {
        const mapKey = `${key}-${value}`;
        if (specValueToSkus[mapKey]) {
          specValueToSkus[mapKey].push(item);
        }
      }
    }
  });

  // 过滤规格树
  return treeClone.filter((treeItem) => {
    const key = treeItem.k_s;
    const isSelectedSpec =
      selectedSku[key] && selectedSku[key] !== UNSELECTED_SKU_VALUE_ID;

    // 过滤规格值
    treeItem.v = treeItem.v.filter((value) => {
      const valueId = value.id;
      const mapKey = `${key}-${valueId}`;
      const relatedSkus = specValueToSkus[mapKey] || [];

      // 1. 如果所有包含该规格值的SKU都被明确禁用，则过滤掉该规格值
      if (relatedSkus.length > 0) {
        const allExplicitlyDisabled = relatedSkus.every(
          (sku) => sku.disable_status === 1
        );
        if (allExplicitlyDisabled) {
          return false;
        }
      }

      // 2. 如果是已选中的值，保留它
      if (isSelectedSpec && String(valueId) === String(selectedSku[key])) {
        return true;
      }

      // 3. 如果用户已经选择了其他规格，检查组合
      const validSelectedEntries = Object.entries(selectedSku).filter(
        ([selectedKey, val]) =>
          val !== UNSELECTED_SKU_VALUE_ID && selectedKey !== key // 排除当前规格
      );

      if (validSelectedEntries.length > 0) {
        // 创建当前组合
        const combinedSelection = {};

        // 添加已选规格
        validSelectedEntries.forEach(([selectedKey, val]) => {
          combinedSelection[selectedKey] = val;
        });

        // 添加当前正在检查的规格值
        combinedSelection[key] = String(valueId);

        // 查找满足当前组合的SKU
        const matchingSku = skuList.filter((sku) =>
          Object.entries(combinedSelection).every(
            ([selectedKey, selectedVal]) =>
              String(sku[selectedKey]) === String(selectedVal)
          )
        );

        // 如果有匹配的SKU，检查它们是否全部被禁用
        if (matchingSku.length > 0) {
          const allDisabled = matchingSku.every(
            (sku) => sku.disable_status === 1
          );
          return !allDisabled;
        }
      }

      // 默认保留所有规格值
      return true;
    });

    // 如果是已选中的规格项，但过滤后没有包含已选值，则隐藏
    if (isSelectedSpec) {
      const selectedValueExists = treeItem.v.some(
        (value) => String(value.id) === String(selectedSku[key])
      );
      return selectedValueExists;
    }

    // 如果该规格项下没有规格值了，则隐藏整个规格项
    return treeItem.v.length > 0;
  });
};

export const getSelectedPropValues = (propList, selectedProp) => {
  const normalizeProp = normalizePropList(propList);
  return Object.keys(selectedProp).reduce((acc, cur) => {
    selectedProp[cur].forEach((it) => {
      acc.push({
        ...normalizeProp[cur][it],
      });
    });
    return acc;
  }, []);
};

export const getSelectedProperties = (propList, selectedProp) => {
  const list = [];
  (propList || []).forEach((prop) => {
    if (selectedProp[prop.k_id] && selectedProp[prop.k_id].length > 0) {
      const v = [];
      prop.v.forEach((it) => {
        if (selectedProp[prop.k_id].indexOf(it.id) > -1) {
          v.push({ ...it });
        }
      });
      list.push({
        ...prop,
        v,
      });
    }
  });
  return list;
};

export default {
  normalizeSkuTree,
  getSkuComb,
  getSelectedSkuValues,
  isAllSelected,
  isSkuChoosable,
  getSelectedPropValues,
  getSelectedProperties,
  filterDisabledSkuTree,
};
