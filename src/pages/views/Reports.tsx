import DashboardLayout from '../../components/layout/DashboardLayout'
import PageHeader from '../../components/common/PageHeader'

import { Button, Card, Table } from 'antd'

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className='flex items-center justify-between mb-6'>
        <PageHeader
          title='Reports'
          subtitle='Analytics & exports'
        />

        <Button type='primary'>
          Export CSV
        </Button>
      </div>

      <Card className='bg-slate-900 border-slate-800'>
        <Table
          pagination={false}
          dataSource={[
            {
              employee: 'Sarah Jenkins',
              hours: '42h',
              productivity: '91%',
            },
          ]}
          columns={[
            {
              title: 'Employee',
              dataIndex: 'employee',
            },

            {
              title: 'Hours',
              dataIndex: 'hours',
            },

            {
              title: 'Productivity',
              dataIndex: 'productivity',
            },
          ]}
        />
      </Card>
    </DashboardLayout>
  )
}