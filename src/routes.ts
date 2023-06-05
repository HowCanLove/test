import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/components/NotFound'));
const Test = lazy(() => import('@/pages/test'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/dashboard/test',
        component: Test,
      }, {
        path: '/dashboard',
        component: Dashboard,
      }, {
        path: '/',
        exact: true,
        component: Home,
      }, {
        component: NotFound,
      }],
  },
];

export default routerConfig;
