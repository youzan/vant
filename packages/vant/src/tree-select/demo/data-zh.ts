const zhejiang = [
  {
    text: '杭州',
    id: 1,
  },
  {
    text: '温州',
    id: 2,
  },
  {
    text: '宁波',
    id: 3,
    disabled: true,
  },
];

const jiangsu = [
  {
    text: '南京',
    id: 4,
  },
  {
    text: '无锡',
    id: 5,
  },
  {
    text: '徐州',
    id: 6,
  },
];

const fujian = [
  {
    text: '泉州',
    id: 7,
  },
  {
    text: '厦门',
    id: 8,
  },
];

export const zhCNData = [
  {
    text: '浙江',
    children: zhejiang,
  },
  {
    text: '江苏',
    children: jiangsu,
  },
  {
    text: '福建',
    disabled: true,
    children: fujian,
  },
];
