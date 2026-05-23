import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import {
  Card,
  Tag,
  Avatar,
} from 'antd'

const alerts = Array.from({
  length: 10,
})

export default function RealtimeAlertsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Real Time Alerts'
        subtitle='Realtime employee behavior notifications'
      />

      <div className='space-y-5'>
        {alerts.map((_, index) => (
          <Card
            key={index}
            className='bg-slate-900 border-slate-800'
          >
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
              <div className='flex items-start gap-4'>
                <Avatar size={50} />

                <div>
                  <h3 className='text-white font-medium'>
                    Michael Chen
                  </h3>

                  <p className='text-slate-400 text-sm mt-1'>
                    Inactive for over 30 minutes
                  </p>
                </div>
              </div>

              <div className='flex flex-wrap items-center gap-3'>
                <Tag color='red'>
                  High Risk
                </Tag>

                <p className='text-slate-500 text-sm'>
                  2 mins ago
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}