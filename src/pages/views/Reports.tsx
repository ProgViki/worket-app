import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import {
  Card,
  Table,
  Tag,
} from 'antd'

const data = Array.from({
  length: 10,
}).map((_, index) => ({
  key: index,
  employee: 'Sarah Jenkins',
  productivity: '89%',
  hours: '8h 24m',
  status: 'Good',
}))

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Reports'
        subtitle='Productivity and workforce reports'
      />

      <Card className='bg-slate-900 border-slate-800'>
        <div className='overflow-x-auto'>
          <Table
            scroll={{
              x: 900,
            }}
            pagination={false}
            dataSource={data}
            columns={[
              {
                title: 'Employee',
                dataIndex: 'employee',
              },

              {
                title: 'Work Hours',
                dataIndex: 'hours',
              },

              {
                title: 'Productivity',
                dataIndex: 'productivity',
              },

              {
                title: 'Status',

                render: () => (
                  <Tag color='green'>
                    Good
                  </Tag>
                ),
              },
            ]}
          />
        </div>
      </Card>
    </DashboardLayout>
  )
}