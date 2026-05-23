import DashboardLayout from '../../components/layout/DashboardLayout'
import PageHeader from '../../components/common/PageHeader'

import { Card } from 'antd'

const alerts = [
  'Sarah Jenkins became idle',
  'Michael opened YouTube',
  'David inactive for 20 mins',
]

export default function RealtimeAlertsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Realtime Alerts'
        subtitle='Live monitoring feed'
      />

      <div className='space-y-4'>
        {alerts.map((alert, index) => (
          <Card
            key={index}
            className='bg-slate-900 border-slate-800'
          >
            <div className='flex items-center gap-3'>
              <div className='h-3 w-3 rounded-full bg-red-500 animate-pulse' />

              <p className='text-white'>
                {alert}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}