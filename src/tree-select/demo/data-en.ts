const group1 = [
  {
    text: 'Delaware',
    id: 1,
  },
  {
    text: 'Florida',
    id: 2,
  },
  {
    text: 'Georqia',
    id: 3,
    disabled: true,
  },
  {
    text: 'Indiana',
    id: 4,
  },
];

const group2 = [
  {
    text: 'Alabama',
    id: 5,
  },
  {
    text: 'Kansas',
    id: 6,
  },
  {
    text: 'Louisiana',
    id: 7,
  },
  {
    text: 'Texas',
    id: 8,
  },
];

const group3 = [
  {
    text: 'Alabama',
    id: 9,
  },
  {
    text: 'Kansas',
    id: 10,
  },
];

export const enUSData = [
  {
    text: 'Group 1',
    children: group1,
  },
  {
    text: 'Group 2',
    children: group2,
  },
  {
    text: 'Group 3',
    disabled: true,
    children: group3,
  },
];
