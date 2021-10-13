export const dateColumns = {
  'zh-CN': [
    {
      values: ['周一', '周二', '周三', '周四', '周五'],
      defaultIndex: 2,
    },
    {
      values: ['上午', '下午', '晚上'],
      defaultIndex: 1,
    },
  ],
  'en-US': [
    {
      values: ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday'],
      defaultIndex: 2,
    },
    {
      values: ['Morging', 'Afternoon', 'Evening'],
      defaultIndex: 1,
    },
  ],
};

export const cascadeColumns = {
  'zh-CN': [
    {
      text: '浙江',
      children: [
        {
          text: '杭州',
          children: [{ text: '西湖区' }, { text: '余杭区' }],
        },
        {
          text: '温州',
          children: [{ text: '鹿城区' }, { text: '瓯海区' }],
        },
      ],
    },
    {
      text: '福建',
      children: [
        {
          text: '福州',
          children: [{ text: '鼓楼区' }, { text: '台江区' }],
        },
        {
          text: '厦门',
          children: [{ text: '思明区' }, { text: '海沧区' }],
        },
      ],
    },
  ],
  'en-US': [
    {
      text: 'Zhejiang',
      children: [
        {
          text: 'Hangzhou',
          children: [{ text: 'Xihu' }, { text: 'Yuhang' }],
        },
        {
          text: 'Wenzhou',
          children: [{ text: 'Lucheng' }, { text: 'Ouhai' }],
        },
      ],
    },
    {
      text: 'Fujian',
      children: [
        {
          text: 'Fuzhou',
          children: [{ text: 'Gulou' }, { text: 'Taijiang' }],
        },
        {
          text: 'Xiamen',
          children: [{ text: 'Siming' }, { text: 'Haicang' }],
        },
      ],
    },
  ],
};
