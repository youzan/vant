import { withInstall } from '../utils';
import _ActionBarButton from './ActionBarButton';

export const ActionBarButton = withInstall(_ActionBarButton);
export default ActionBarButton;
export type { ActionBarButtonProps } from './ActionBarButton';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanActionBarButton: typeof ActionBarButton;
  }
}
