/**
 * Create a component with common options
 */
import createBasic from './create-basic';
import Icon from '../icon';
import Loading from '../loading';
import Cell from '../cell';
import CellGroup from '../cell-group';

export default function (sfc) {
  sfc.components = Object.assign(sfc.components || {}, {
    Icon,
    Loading,
    Cell,
    CellGroup
  });
  return createBasic(sfc);
}
