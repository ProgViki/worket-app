import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import { Card, Table } from 'antd'

const data = [
  {
    key: 1,
    employee: 'Sarah Jenkins',
    app: 'VS Code',
    start: '09:12 AM',
    end: '11:48 AM',
    duration: '2h 36m',
  },

  {
    key: 2,
    employee: 'Michael Chen',
    app: 'Figma',
    start: '10:00 AM',
    end: '01:20 PM',
    duration: '3h 20m',
  },

  {
    key: 3,
    employee: 'David Smith',
    app: 'Terminal',
    start: '08:10 AM',
    end: '12:30 PM',
    duration: '4h 20m',
  },
]

export default function AppsHistoryPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Apps History'
        subtitle='Historical application activity'
      />

      <Card className='bg-slate-900 border-slate-800'>
        <Table
          pagination={false}
          dataSource={data}
          scroll={{
              x: 900,
            }}
          columns={[
            {
              title: 'Employee',
              dataIndex: 'employee',
            },

            {
              title: 'Application',
              dataIndex: 'app',
            },

            {
              title: 'Start Time',
              dataIndex: 'start',
            },

            {
              title: 'End Time',
              dataIndex: 'end',
            },

            {
              title: 'Duration',
              dataIndex: 'duration',
            },
          ]}
        />
      </Card>
    </DashboardLayout>
  )
}