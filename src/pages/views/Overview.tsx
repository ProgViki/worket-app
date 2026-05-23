import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import StatsCard from '../../components/common/StatCard'

import {
  TeamOutlined,
  DesktopOutlined,
  CoffeeOutlined,
  StopOutlined,
  DownloadOutlined,
} from '@ant-design/icons'

import {
  Card,
  Progress,
  Table,
  Tag,
  Avatar,
} from 'antd'

const riskyUsers = [
  {
    key: 1,
    name: 'Michael Chen',
    risk: 'High',
    issue: 'Inactive for 42 mins',
  },

  {
    key: 2,
    name: 'David Smith',
    risk: 'Medium',
    issue: 'Using blacklisted apps',
  },
]

const recentScreenshots = Array.from({
  length: 4,
})

export default function OverviewPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Overview'
        subtitle='Realtime workforce intelligence dashboard'
      />

      {/* TOP STATS */}

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-6'>
        <StatsCard
          title='Total Team Members'
          value='124'
          icon={<TeamOutlined />}
        />

        <StatsCard
          title='Active Users'
          value='89'
          icon={<DesktopOutlined />}
        />

        <StatsCard
          title='Currently on Break'
          value='12'
          icon={<CoffeeOutlined />}
        />

        <StatsCard
          title='Inactive Users'
          value='7'
          icon={<StopOutlined />}
        />

        <StatsCard
          title='App Not Installed'
          value='16'
          icon={<DownloadOutlined />}
        />
      </div>

      {/* ANALYTICS GRID */}

      <div className='grid grid-cols-1 xl:grid-cols-12 gap-5'>
        {/* WORK LOAD ANALYSIS */}

        <Card className='xl:col-span-8 bg-slate-900 border-slate-800 min-h-[360px]'>
          <div className='flex items-center justify-between mb-6'>
            <div>
              <h3 className='text-lg font-semibold text-white'>
                Work Load Analysis
              </h3>

              <p className='text-slate-400 text-sm mt-1'>
                Daily productivity & workload distribution
              </p>
            </div>

            <Tag color='green'>
              +12% Productivity
            </Tag>
          </div>

          {/* PLACEHOLDER GRAPH */}

          <div className='h-[250px] rounded-2xl border border-slate-800 bg-slate-950 flex items-center justify-center'>
            <p className='text-slate-500'>
              Workload Analytics Chart
            </p>
          </div>
        </Card>

        {/* TOP USED APPS */}

        <Card className='xl:col-span-4 bg-slate-900 border-slate-800 min-h-[360px]'>
          <h3 className='text-lg font-semibold text-white mb-6'>
            Top Used Apps
          </h3>

          <div className='space-y-5'>
            {[
              {
                name: 'VS Code',
                usage: 84,
              },

              {
                name: 'Figma',
                usage: 67,
              },

              {
                name: 'Chrome',
                usage: 58,
              },

              {
                name: 'Slack',
                usage: 46,
              },
            ].map((app) => (
              <div key={app.name}>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-white'>
                    {app.name}
                  </span>

                  <span className='text-slate-400 text-sm'>
                    {app.usage}%
                  </span>
                </div>

                <Progress
                  percent={app.usage}
                  showInfo={false}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* CURRENTLY USING APPS & WEBSITES */}

        <Card className='xl:col-span-5 bg-slate-900 border-slate-800'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-lg font-semibold text-white'>
              Currently Using Apps & Websites
            </h3>

            <Tag color='blue'>
              Live
            </Tag>
          </div>

          <div className='space-y-5'>
            {[
              {
                name: 'Sarah Jenkins',
                app: 'VS Code',
                site: 'github.com',
              },

              {
                name: 'Michael Chen',
                app: 'Figma',
                site: 'figma.com',
              },

              {
                name: 'David Smith',
                app: 'Terminal',
                site: 'stackoverflow.com',
              },
            ].map((user) => (
              <div
                key={user.name}
                className='flex items-center justify-between'
              >
                <div className='flex items-center gap-3'>
                  <Avatar />

                  <div>
                    <p className='text-white font-medium'>
                      {user.name}
                    </p>

                    <p className='text-slate-400 text-xs'>
                      {user.site}
                    </p>
                  </div>
                </div>

                <Tag color='processing'>
                  {user.app}
                </Tag>
              </div>
            ))}
          </div>
        </Card>

        {/* RISKY USERS */}

        <Card className='xl:col-span-7 bg-slate-900 border-slate-800'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-lg font-semibold text-white'>
              Risky Users
            </h3>

            <Tag color='red'>
              2 Active Risks
            </Tag>
          </div>

          <Table
            pagination={false}
            dataSource={riskyUsers}
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
                title: 'Risk Level',

                render: (_, record) => (
                  <Tag
                    color={
                      record.risk === 'High'
                        ? 'red'
                        : 'orange'
                    }
                  >
                    {record.risk}
                  </Tag>
                ),
              },
            ]}
          />
        </Card>

        {/* RECENT SCREENSHOTS */}

        <Card className='xl:col-span-8 bg-slate-900 border-slate-800'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-lg font-semibold text-white'>
              Recent Screenshots
            </h3>

            <Tag color='purple'>
              Live Capture
            </Tag>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {recentScreenshots.map((_, index) => (
              <div
                key={index}
                className='rounded-2xl overflow-hidden border border-slate-800 bg-slate-950'
              >
                <img
                  src='https://placehold.co/600x400'
                  className='w-full h-40 object-cover'
                />

                <div className='p-3'>
                  <p className='text-white text-sm font-medium'>
                    Sarah Jenkins
                  </p>

                  <p className='text-slate-400 text-xs mt-1'>
                    VS Code • 10:42 AM
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* WORK HOURS SUMMARY */}

        <Card className='xl:col-span-4 bg-slate-900 border-slate-800'>
          <h3 className='text-lg font-semibold text-white mb-6'>
            Work Hours Summary
          </h3>

          <div className='space-y-6'>
            {[
              {
                label: 'Productive Hours',
                value: 84,
              },

              {
                label: 'Idle Time',
                value: 16,
              },

              {
                label: 'Break Hours',
                value: 10,
              },

              {
                label: 'Meeting Hours',
                value: 42,
              },
            ].map((item) => (
              <div key={item.label}>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-white text-sm'>
                    {item.label}
                  </span>

                  <span className='text-slate-400 text-sm'>
                    {item.value}h
                  </span>
                </div>

                <Progress
                  percent={item.value}
                  showInfo={false}
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}