import { createNamespace, isDef } from '../utils';

const [createComponent, bem] = createNamespace('dropdown-item-son');

import Cell from '../cell';

export default createComponent({
  extends: Cell
});
