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
      values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      defaultIndex: 2,
    },
    {
      values: ['Morning', 'Afternoon', 'Evening'],
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

export const cascadeColumnsCustomKey = {
  'zh-CN': [
    {
      cityName: '浙江',
      cities: [
        {
          cityName: '杭州',
          cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }],
        },
        {
          cityName: '温州',
          cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }],
        },
      ],
    },
    {
      cityName: '福建',
      cities: [
        {
          cityName: '福州',
          cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }],
        },
        {
          cityName: '厦门',
          cities: [{ cityName: '思明区' }, { cityName: '海沧区' }],
        },
      ],
    },
  ],
  'en-US': [
    {
      cityName: 'Zhejiang',
      cities: [
        {
          cityName: 'Hangzhou',
          cities: [{ cityName: 'Xihu' }, { cityName: 'Yuhang' }],
        },
        {
          cityName: 'Wenzhou',
          cities: [{ cityName: 'Lucheng' }, { cityName: 'Ouhai' }],
        },
      ],
    },
    {
      cityName: 'Fujian',
      cities: [
        {
          cityName: 'Fuzhou',
          cities: [{ cityName: 'Gulou' }, { cityName: 'Taijiang' }],
        },
        {
          cityName: 'Xiamen',
          cities: [{ cityName: 'Siming' }, { cityName: 'Haicang' }],
        },
      ],
    },
  ],
};
