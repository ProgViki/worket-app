import DashboardLayout from '../../components/layout/DashboardLayout'
import PageHeader from '../../components/common/PageHeader'

import { Card, Tag } from 'antd'

export default function RiskUsersPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Risk Users'
        subtitle='Flagged employees'
      />

      <div className='space-y-4'>
        {[1, 2, 3].map((item) => (
          <Card
            key={item}
            className='bg-slate-900 border-slate-800'
          >
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='text-white font-semibold'>
                  Michael Chen
                </h3>

                <p className='text-slate-400 mt-1'>
                  Excessive idle activity detected
                </p>
              </div>

              <Tag color='red'>
                HIGH RISK
              </Tag>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}