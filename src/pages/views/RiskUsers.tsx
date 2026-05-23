import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import {
  Card,
  Table,
  Tag,
  Progress,
} from 'antd'

const users = Array.from({
  length: 8,
}).map((_, index) => ({
  key: index,
  name: 'Michael Chen',
  risk: 'High',
  activity: 32,
  issue: 'Suspicious inactivity',
}))

export default function RiskUsersPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Risk Users'
        subtitle='Employees requiring attention'
      />

      <Card className='bg-slate-900 border-slate-800'>
        <div className='overflow-x-auto'>
          <Table
            scroll={{
              x: 950,
            }}
            pagination={false}
            dataSource={users}
            columns={[
              {
                title: 'Employee',
                dataIndex: 'name',
              },

              {
                title: 'Issue',
                dataIndex: 'issue',
              },

              {
                title: 'Activity',

                render: (_, record) => (
                  <div className='w-32'>
                    <Progress
                      percent={record.activity}
                      size='small'
                    />
                  </div>
                ),
              },

              {
                title: 'Risk Level',

                render: () => (
                  <Tag color='red'>
                    High
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