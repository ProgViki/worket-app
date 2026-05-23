import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import { Card, Progress } from 'antd'

const apps = [
  {
    name: 'VS Code',
    percent: 84,
  },

  {
    name: 'Figma',
    percent: 67,
  },

  {
    name: 'Slack',
    percent: 58,
  },

  {
    name: 'Chrome',
    percent: 49,
  },
]

export default function AppsSummaryPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Apps Summary'
        subtitle='Overall applications productivity'
      />

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
        {apps.map((app) => (
          <Card
            key={app.name}
            className='bg-slate-900 border-slate-800'
          >
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-white font-medium'>
                {app.name}
              </h3>

              <span className='text-slate-400'>
                {app.percent}%
              </span>
            </div>

            <Progress percent={app.percent} />
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}