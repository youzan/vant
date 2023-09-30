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
    text: 'Georgia',
    id: 3,
    disabled: true,
  },
];

const group2 = [
  {
    text: 'Alabama',
    id: 4,
  },
  {
    text: 'Kansas',
    id: 5,
  },
  {
    text: 'Louisiana',
    id: 6,
  },
];

const group3 = [
  {
    text: 'Alabama',
    id: 7,
  },
  {
    text: 'Kansas',
    id: 8,
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
