export const basicColumns = {
  'zh-CN': [
    { text: '杭州', value: 'Hangzhou' },
    { text: '宁波', value: 'Ningbo' },
    { text: '温州', value: 'Wenzhou' },
    { text: '绍兴', value: 'Shaoxing' },
    { text: '湖州', value: 'Huzhou' },
  ],
  'en-US': [
    { text: 'Delaware', value: 'Delaware' },
    { text: 'Florida', value: 'Florida' },
    { text: 'Wenzhou', value: 'Wenzhou' },
    { text: 'Indiana', value: 'Indiana' },
    { text: 'Maine', value: 'Maine' },
  ],
};

export const dateColumns = {
  'zh-CN': [
    [
      { text: '周一', value: 'Monday' },
      { text: '周二', value: 'Tuesday' },
      { text: '周三', value: 'Wednesday' },
      { text: '周四', value: 'Thursday' },
      { text: '周五', value: 'Friday' },
    ],
    [
      { text: '上午', value: 'Morning' },
      { text: '下午', value: 'Afternoon' },
      { text: '晚上', value: 'Evening' },
    ],
  ],
  'en-US': [
    [
      { text: 'Monday', value: 'Monday' },
      { text: 'Tuesday', value: 'Tuesday' },
      { text: 'Wednesday', value: 'Wednesday' },
      { text: 'Thursday', value: 'Thursday' },
      { text: 'Friday', value: 'Friday' },
    ],
    [
      { text: 'Morning', value: 'Morning' },
      { text: 'Afternoon', value: 'Afternoon' },
      { text: 'Evening', value: 'Evening' },
    ],
  ],
};

export const cascadeColumns = {
  'zh-CN': [
    {
      text: '浙江',
      value: 'Zhejiang',
      children: [
        {
          text: '杭州',
          value: 'Hangzhou',
          children: [
            { text: '西湖区', value: 'Xihu' },
            { text: '余杭区', value: 'Yuhang' },
          ],
        },
        {
          text: '温州',
          value: 'Wenzhou',
          children: [
            { text: '鹿城区', value: 'Lucheng' },
            { text: '瓯海区', value: 'Ouhai' },
          ],
        },
      ],
    },
    {
      text: '福建',
      value: 'Fujian',
      children: [
        {
          text: '福州',
          value: 'Fuzhou',
          children: [
            { text: '鼓楼区', value: 'Gulou' },
            { text: '台江区', value: 'Taijiang' },
          ],
        },
        {
          text: '厦门',
          value: 'Xiamen',
          children: [
            { text: '思明区', value: 'Siming' },
            { text: '海沧区', value: 'Haicang' },
          ],
        },
      ],
    },
  ],
  'en-US': [
    {
      text: 'Zhejiang',
      value: 'Zhejiang',
      children: [
        {
          text: 'Hangzhou',
          value: 'Hangzhou',
          children: [
            { text: 'Xihu', value: 'Xihu' },
            { text: 'Yuhang', value: 'Yuhang' },
          ],
        },
        {
          text: 'Wenzhou',
          value: 'Wenzhou',
          children: [
            { text: 'Lucheng', value: 'Lucheng' },
            { text: 'Ouhai', value: 'Ouhai' },
          ],
        },
      ],
    },
    {
      text: 'Fujian',
      value: 'Fujian',
      children: [
        {
          text: 'Fuzhou',
          value: 'Fuzhou',
          children: [
            { text: 'Gulou', value: 'Gulou' },
            { text: 'Taijiang', value: 'Taijiang' },
          ],
        },
        {
          text: 'Xiamen',
          value: 'Xiamen',
          children: [
            { text: 'Siming', value: 'Siming' },
            { text: 'Haicang', value: 'Haicang' },
          ],
        },
      ],
    },
  ],
};

export const customKeyColumns = {
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

export const disabledColumns = {
  'zh-CN': [
    { text: '杭州', value: 'Hangzhou', disabled: true },
    { text: '宁波', value: 'Ningbo' },
    { text: '温州', value: 'Wenzhou' },
  ],
  'en-US': [
    { text: 'Delaware', value: 'Delaware', disabled: true },
    { text: 'Florida', value: 'Florida' },
    { text: 'Wenzhou', value: 'Wenzhou' },
  ],
};
