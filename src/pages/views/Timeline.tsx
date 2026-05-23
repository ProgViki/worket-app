import DashboardLayout from '../../components/layout/DashboardLayout'
import PageHeader from '../../components/common/PageHeader'

import { Card } from 'antd'

const employees = [
  'Sarah Jenkins',
  'Michael Chen',
  'David Smith',
]

export default function TimelinePage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Timeline'
        subtitle='Employee activity timeline'
      />

      <Card className='bg-slate-900 border-slate-800'>
        <div className='space-y-6'>
          {employees.map((employee) => (
            <div key={employee}>
              <div className='flex justify-between mb-2'>
                <p className='text-white font-medium'>
                  {employee}
                </p>

                <span className='text-slate-400 text-sm'>
                  8h 24m tracked
                </span>
              </div>

              <div className='flex h-5 rounded-full overflow-hidden'>
                <div className='bg-green-500 w-[60%]' />

                <div className='bg-yellow-500 w-[20%]' />

                <div className='bg-slate-700 w-[20%]' />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  )
}