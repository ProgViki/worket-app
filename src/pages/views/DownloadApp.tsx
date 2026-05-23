import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import {
  AppleOutlined,
  WindowsOutlined,
  DesktopOutlined,
} from '@ant-design/icons'

import { Button, Card } from 'antd'

const apps = [
  {
    name: 'Windows',
    icon: <WindowsOutlined />,
    version: 'v2.1.4',
  },

  {
    name: 'macOS',
    icon: <AppleOutlined />,
    version: 'v2.1.4',
  },

  {
    name: 'Linux',
    icon: <DesktopOutlined />,
    version: 'v2.1.4',
  },
]

export default function DownloadAppPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Download App'
        subtitle='Install desktop monitoring agents'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {apps.map((app) => (
          <Card
            key={app.name}
            className='bg-slate-900 border-slate-800'
          >
            <div className='text-5xl text-white mb-5'>
              {app.icon}
            </div>

            <h3 className='text-white text-xl font-semibold'>
              {app.name}
            </h3>

            <p className='text-slate-400 mt-2'>
              Latest Version {app.version}
            </p>

            <Button
              type='primary'
              size='large'
              block
              className='mt-6'
            >
              Download
            </Button>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}