import { VueTag, VeturTags, VeturAttributes, VeturAttribute } from './type';

export function genVeturTags(tags: VueTag[]) {
  const veturTags: VeturTags = {};

  tags.forEach(tag => {
    veturTags[tag.name] = {
      attributes: tag.attributes ? tag.attributes.map(item => item.name) : [],
    };
  });

  return veturTags;
}

export function genVeturAttributes(tags: VueTag[]) {
  const veturAttributes: VeturAttributes = {};

  tags.forEach(tag => {
    if (tag.attributes) {
      tag.attributes.forEach(attr => {
        let attribute: VeturAttribute = {
          type: attr.value.type,
          description: `${attr.description}, 默认值: ${attr.default}`
        }

        if (attr.options.length > 0) {
          attribute.options = attr.options
        }

        veturAttributes[`${tag.name}/${attr.name}`] = attribute;
      });
    }
  });

  return veturAttributes;
}
