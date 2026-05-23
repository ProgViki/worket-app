import { Layout, Menu } from 'antd'

import type { MenuProps } from 'antd'

import {
  DashboardOutlined,
  TeamOutlined,
  CameraOutlined,
  HistoryOutlined,
  FileTextOutlined,
  WarningOutlined,
  BellOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  PieChartOutlined,
  SettingOutlined,
  CreditCardOutlined,
  DownloadOutlined,
} from '@ant-design/icons'

import { useLocation, useNavigate } from 'react-router-dom'

const { Sider } = Layout

const menuItems: MenuProps['items'] = [
  {
    key: 'realtime',

    label: (
      <span className='text-[11px] uppercase tracking-wider text-slate-500 font-semibold'>
        Realtime
      </span>
    ),

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

    label: (
      <span className='text-[11px] uppercase tracking-wider text-slate-500 font-semibold'>
        Work Monitor
      </span>
    ),

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

        icon: <WarningOutlined />,

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

    label: (
      <span className='text-[11px] uppercase tracking-wider text-slate-500 font-semibold'>
        AppUsage
      </span>
    ),

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

    label: (
      <span className='text-[11px] uppercase tracking-wider text-slate-500 font-semibold'>
        Configuration
      </span>
    ),

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
  const navigate = useNavigate()

  const location = useLocation()

  return (
    <Sider
      width={290}
      className='min-h-screen border-r border-slate-800 bg-slate-950'
    >
      {/* LOGO */}

      <div className='h-16 border-b border-slate-800 flex items-center px-6'>
        <div>
          <h1 className='text-xl font-bold text-white'>
            WorkEthics
          </h1>

          <p className='text-xs text-slate-500 mt-1'>
            Workforce Intelligence
          </p>
        </div>
      </div>

      {/* MENU */}

      <div className='py-4'>
        <Menu
          mode='inline'
          theme='dark'
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          className='bg-transparent border-0'
        />
      </div>

      {/* FOOTER */}

      {/* <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800 bg-slate-950'>
        <div className='rounded-2xl bg-slate-900 border border-slate-800 p-4'>
          <p className='text-sm font-medium text-white'>
            Productivity Score
          </p>

          <div className='mt-3'>
            <div className='flex justify-between text-xs mb-2'>
              <span className='text-slate-400'>
                Team Efficiency
              </span>

              <span className='text-green-400'>
                89%
              </span>
            </div>

            <div className='h-2 rounded-full bg-slate-800 overflow-hidden'>
              <div className='h-full w-[89%] bg-green-500 rounded-full' />
            </div>
          </div>

          <div className='mt-4 flex items-center gap-2'>
            <div className='h-2 w-2 rounded-full bg-green-500 animate-pulse' />

            <span className='text-xs text-slate-400'>
              89 employees online
            </span>
          </div>
        </div>
      </div> */}
    </Sider>
  )
}