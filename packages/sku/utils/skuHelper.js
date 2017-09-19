import find from 'lodash/find';
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
  skuTree.forEach(treeItem => {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
};

// 判断是否所有的sku都已经选中
export const isAllSelected = (skuTree, selectedSku) => {
  // 筛选selectedSku对象中key值不为空的值
  const selected = Object.keys(selectedSku).filter(skuKeyStr => selectedSku[skuKeyStr] !== '');
  return skuTree.length === selected.length;
};

// 根据已选择的sku获取skuComb
export const getSkuComb = (skuList, selectedSku) => {
  const skuComb = find(skuList, skuComb => {
    return Object.keys(selectedSku).every(skuKeyStr => {
      // 后端给的key有时数字有时字符串，需要兼容=。=
      return skuComb[skuKeyStr] == selectedSku[skuKeyStr]; // eslint-disable-line
    });
  });
  return skuComb;
};

// 获取已选择的sku名称
export const getSelectedSkuValues = (skuTree, selectedSku) => {
  const normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce((selectedValues, skuKeyStr) => {
    const skuValues = normalizedTree[skuKeyStr];
    const skuValueId = selectedSku[skuKeyStr];

    if (skuValueId) {
      const skuValue = find(skuValues, skuValue => skuValue.id === skuValueId);
      skuValue && selectedValues.push(skuValue);
    }
    return selectedValues;
  }, []);
};

const SkuHelper = {
  normalizeSkuTree,
  isAllSelected,
  getSkuComb,
  getSelectedSkuValues
};
export default SkuHelper;
