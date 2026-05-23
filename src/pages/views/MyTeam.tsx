import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import {
  Card,
  Avatar,
  Tag,
  Input,
  Select,
  Button,
} from 'antd'

import {
  UserAddOutlined,
} from '@ant-design/icons'

const members = Array.from({ length: 8 }).map(
  (_, index) => ({
    id: index,
    name: 'Sarah Jenkins',
    role: 'Frontend Developer',
    productivity: '89%',
    status: 'Active',
  }),
)

export default function MyTeamPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='My Team'
        subtitle='Monitor employees and team productivity'
      />

      {/* FILTERS */}

      <div className='flex flex-col lg:flex-row gap-4 mb-6'>
        <Input.Search
          placeholder='Search employees'
          size='large'
          className='w-full'
        />

        <div className='flex gap-3 w-full lg:w-auto'>
          <Select
            size='large'
            className='w-full lg:w-44'
            defaultValue='all'
            options={[
              {
                label: 'All Teams',
                value: 'all',
              },
            ]}
          />

          <Button
            type='primary'
            icon={<UserAddOutlined />}
            size='large'
            className='w-full lg:w-auto'
          >
            Add Member
          </Button>
        </div>
      </div>

      {/* TEAM GRID */}

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5'>
        {members.map((member) => (
          <Card
            key={member.id}
            className='bg-slate-900 border-slate-800 h-full'
          >
            <div className='flex flex-col items-center text-center'>
              <Avatar size={70} />

              <h3 className='text-white text-lg font-semibold mt-4'>
                {member.name}
              </h3>

              <p className='text-slate-400 text-sm mt-1'>
                {member.role}
              </p>

              <div className='flex items-center gap-2 mt-4 flex-wrap justify-center'>
                <Tag color='green'>
                  {member.status}
                </Tag>

                <Tag color='blue'>
                  {member.productivity}
                </Tag>
              </div>

              <Button
                block
                className='mt-5'
              >
                View Profile
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}