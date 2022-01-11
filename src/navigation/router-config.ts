import { useRoutes } from 'react-router';
import Routes from './routes';

const RouterConfig = () => {
  return useRoutes(Routes());
};

export default RouterConfig;
