import DashboardLayout from '../../components/layout/DashboardLayout'
import PageHeader from '../../components/common/PageHeader'

import { Avatar, Card, Table, Tag } from 'antd'

const data = [
  {
    key: 1,
    name: 'Sarah Jenkins',
    role: 'Frontend Engineer',
    productivity: '92%',
    status: 'Online',
    app: 'VS Code',
  },

  {
    key: 2,
    name: 'Michael Chen',
    role: 'Designer',
    productivity: '75%',
    status: 'Idle',
    app: 'Figma',
  },
]

export default function MyTeamPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='My Team'
        subtitle='Monitor team productivity'
      />

      <Card className='bg-slate-900 border-slate-800'>
        <Table
          pagination={false}
          dataSource={data}
          columns={[
            {
              title: 'Employee',

              render: (_, record) => (
                <div className='flex items-center gap-3'>
                  <Avatar />

                  <div>
                    <p className='font-medium text-white'>
                      {record.name}
                    </p>

                    <p className='text-slate-400 text-xs'>
                      {record.role}
                    </p>
                  </div>
                </div>
              ),
            },

            {
              title: 'Current App',
              dataIndex: 'app',
            },

            {
              title: 'Productivity',
              dataIndex: 'productivity',
            },

            {
              title: 'Status',

              render: (_, record) => (
                <Tag
                  color={
                    record.status === 'Online'
                      ? 'green'
                      : 'orange'
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