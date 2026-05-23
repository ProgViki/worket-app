import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import { Card, Progress, Table, Tag } from 'antd'

const data = [
  {
    key: 1,
    app: 'VS Code',
    category: 'Development',
    productivity: 92,
    hours: '342h',
    users: 24,
    status: 'Productive',
  },

  {
    key: 2,
    app: 'YouTube',
    category: 'Entertainment',
    productivity: 18,
    hours: '82h',
    users: 14,
    status: 'Unproductive',
  },

  {
    key: 3,
    app: 'Figma',
    category: 'Design',
    productivity: 87,
    hours: '210h',
    users: 11,
    status: 'Productive',
  },
]

export default function ReviewAppsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Review Apps'
        subtitle='Applications used across organization'
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
              title: 'Application',
              dataIndex: 'app',
            },

            {
              title: 'Category',
              dataIndex: 'category',
            },

            {
              title: 'Usage Hours',
              dataIndex: 'hours',
            },

            {
              title: 'Employees',
              dataIndex: 'users',
            },

            {
              title: 'Productivity',

              render: (_, record) => (
                <div className='w-40'>
                  <Progress
                    percent={record.productivity}
                    size='small'
                  />
                </div>
              ),
            },

            {
              title: 'Status',

              render: (_, record) => (
                <Tag
                  color={
                    record.status === 'Productive'
                      ? 'green'
                      : 'red'
                  }
                >
                  {record.status}
                </Tag>
              ),
            },
          ]}
        />
      </Card>
    </DashboardLayout>
  )
}