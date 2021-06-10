import { 
  DashboardOutlined,
  SnippetsOutlined

} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'appeals',
  path: `${APP_PREFIX_PATH}/appeals`,
  title: 'Müraciətlər',
  icon:  SnippetsOutlined,
  breadcrumb: false,
  submenu: []
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
