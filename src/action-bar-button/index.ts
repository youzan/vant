import { withInstall } from '../utils';
import _ActionBarButton from './ActionBarButton';

const ActionBarButton = withInstall<typeof _ActionBarButton>(_ActionBarButton);

export default ActionBarButton;
export { ActionBarButton };
