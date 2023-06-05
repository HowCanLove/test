import { SmileOutlined, HeartOutlined } from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: 'home',
    path: '/',
    icon: SmileOutlined,
  },
  {
    name: '大盘数据',
    path: '/dashboard',
    icon: HeartOutlined,
    children: [
      {
        name: '活动列表',
        code: 'HUO_DONG_LIE_BIAO',
        path: '/dashboard/test',
      }],
  },
];

export { asideMenuConfig };
