import { withInstall } from '../utils';
import _ConfigProvider from './ConfigProvider';

const ConfigProvider = withInstall<typeof _ConfigProvider>(_ConfigProvider);

export default ConfigProvider;
export { ConfigProvider };
