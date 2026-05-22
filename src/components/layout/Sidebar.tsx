import { Layout, Menu } from 'antd'

import type { MenuProps } from 'antd'

import {
  DashboardOutlined,
  TeamOutlined,
  CameraOutlined,
  HistoryOutlined,
  FileTextOutlined,
  AlertOutlined,
  BellOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  PieChartOutlined,
  SettingOutlined,
  CreditCardOutlined,
  DownloadOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const menuItems: MenuProps['items'] = [
  {
    key: 'realtime',

    label: 'Realtime',

    type: 'group',

    children: [
      {
        key: '/',
        icon: <DashboardOutlined />,
        label: 'Overview',
      },

      {
        key: '/my-team',
        icon: <TeamOutlined />,
        label: 'My Team',
      },
    ],
  },

  {
    key: 'work-monitor',

    label: 'Work Monitor',

    type: 'group',

    children: [
      {
        key: '/screenshots',
        icon: <CameraOutlined />,
        label: 'Screenshots',
      },

      {
        key: '/timeline',
        icon: <HistoryOutlined />,
        label: 'Timeline',
      },

      {
        key: '/reports',
        icon: <FileTextOutlined />,
        label: 'Reports',
      },

      {
        key: '/risk-users',
        icon: <AlertOutlined />,
        label: 'Risk Users',
      },

      {
        key: '/realtime-alerts',
        icon: <BellOutlined />,
        label: 'Real Time Alert',
      },
    ],
  },

  {
    key: 'app-usage',

    label: 'AppUsage',

    type: 'group',

    children: [
      {
        key: '/review-apps',
        icon: <AppstoreOutlined />,
        label: 'Review Apps',
      },

      {
        key: '/apps-history',
        icon: <BarChartOutlined />,
        label: 'Apps History',
      },

      {
        key: '/apps-summary',
        icon: <PieChartOutlined />,
        label: 'Apps Summary',
      },
    ],
  },

  {
    key: 'configuration',

    label: 'Configuration',

    type: 'group',

    children: [
      {
        key: '/settings',
        icon: <SettingOutlined />,
        label: 'Settings',
      },

      {
        key: '/billing',
        icon: <CreditCardOutlined />,
        label: 'Billing',
      },

      {
        key: '/download-app',
        icon: <DownloadOutlined />,
        label: 'Download App',
      },
    ],
  },
]

export default function Sidebar() {
  return (
    <Sider width={290}>
      <Menu
        mode='inline'
        theme='dark'
        items={menuItems}
      />
    </Sider>
  )
}