import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import {
  Card,
  Progress,
  Table,
  Tag,
  Select,
  Input,
} from 'antd'

const topApps = [
  {
    key: 1,
    app: 'VS Code',
    users: 42,
    hours: '124h',
    productivity: 92,
    status: 'Highly Productive',
  },

  {
    key: 2,
    app: 'Figma',
    users: 28,
    hours: '82h',
    productivity: 81,
    status: 'Productive',
  },

  {
    key: 3,
    app: 'YouTube',
    users: 18,
    hours: '41h',
    productivity: 32,
    status: 'Distracting',
  },

  {
    key: 4,
    app: 'Slack',
    users: 35,
    hours: '64h',
    productivity: 70,
    status: 'Communication',
  },
]

const appCategories = [
  {
    title: 'Development',
    usage: 84,
  },

  {
    title: 'Design',
    usage: 62,
  },

  {
    title: 'Communication',
    usage: 56,
  },

  {
    title: 'Entertainment',
    usage: 18,
  },
]

export default function AppsSummaryPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Apps Summary'
        subtitle='Organization-wide application productivity insights'
      />

      {/* FILTERS */}

      <div className='flex flex-col lg:flex-row gap-4 mb-6'>
        <Input.Search
          size='large'
          placeholder='Search apps or websites'
          className='w-full'
        />

        <div className='flex gap-3 w-full lg:w-auto'>
          <Select
            size='large'
            defaultValue='today'
            className='w-full lg:w-44'
            options={[
              {
                label: 'Today',
                value: 'today',
              },

              {
                label: 'This Week',
                value: 'week',
              },

              {
                label: 'This Month',
                value: 'month',
              },
            ]}
          />

          <Select
            size='large'
            defaultValue='all'
            className='w-full lg:w-44'
            options={[
              {
                label: 'All Teams',
                value: 'all',
              },
            ]}
          />
        </div>
      </div>

      {/* TOP ANALYTICS */}

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6'>
        <Card className='bg-slate-900 border-slate-800'>
          <p className='text-slate-400 text-sm'>
            Total Apps Used
          </p>

          <h2 className='text-3xl font-bold text-white mt-3'>
            128
          </h2>
        </Card>

        <Card className='bg-slate-900 border-slate-800'>
          <p className='text-slate-400 text-sm'>
            Productive Apps
          </p>

          <h2 className='text-3xl font-bold text-white mt-3'>
            92
          </h2>
        </Card>

        <Card className='bg-slate-900 border-slate-800'>
          <p className='text-slate-400 text-sm'>
            Distracting Apps
          </p>

          <h2 className='text-3xl font-bold text-white mt-3'>
            14
          </h2>
        </Card>

        <Card className='bg-slate-900 border-slate-800'>
          <p className='text-slate-400 text-sm'>
            Avg Productivity
          </p>

          <h2 className='text-3xl font-bold text-white mt-3'>
            84%
          </h2>
        </Card>
      </div>

      {/* CONTENT GRID */}

      <div className='grid grid-cols-1 xl:grid-cols-12 gap-5'>
        {/* APP CATEGORY SUMMARY */}

        <Card className='xl:col-span-4 bg-slate-900 border-slate-800 h-full'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-lg font-semibold text-white'>
              App Categories
            </h3>

            <Tag color='blue'>
              Analytics
            </Tag>
          </div>

          <div className='space-y-6'>
            {appCategories.map((category) => (
              <div key={category.title}>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-white text-sm'>
                    {category.title}
                  </span>

                  <span className='text-slate-400 text-sm'>
                    {category.usage}%
                  </span>
                </div>

                <Progress
                  percent={category.usage}
                  showInfo={false}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* PRODUCTIVITY CHART */}

        <Card className='xl:col-span-8 bg-slate-900 border-slate-800 h-full'>
          <div className='flex items-center justify-between mb-6'>
            <div>
              <h3 className='text-lg font-semibold text-white'>
                Apps Productivity Analysis
              </h3>

              <p className='text-slate-400 text-sm mt-1'>
                Organization-wide app performance
              </p>
            </div>

            <Tag color='green'>
              +8% Improvement
            </Tag>
          </div>

          <div className='h-[300px] rounded-2xl border border-slate-800 bg-slate-950 flex items-center justify-center'>
            <p className='text-slate-500'>
              Productivity Chart Placeholder
            </p>
          </div>
        </Card>

        {/* APPS TABLE */}

        <Card className='xl:col-span-12 bg-slate-900 border-slate-800'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6'>
            <div>
              <h3 className='text-lg font-semibold text-white'>
                Apps Usage Breakdown
              </h3>

              <p className='text-slate-400 text-sm mt-1'>
                Detailed app usage insights
              </p>
            </div>

            <Tag color='purple'>
              128 Active Apps
            </Tag>
          </div>

          <div className='overflow-x-auto'>
            <Table
              pagination={false}
              scroll={{
                x: 1000,
              }}
              dataSource={topApps}
              columns={[
                {
                  title: 'Application',
                  dataIndex: 'app',
                },

                {
                  title: 'Active Users',
                  dataIndex: 'users',
                },

                {
                  title: 'Usage Hours',
                  dataIndex: 'hours',
                },

                {
                  title: 'Productivity Score',

                  render: (_, record) => (
                    <div className='w-36'>
                      <Progress
                        percent={record.productivity}
                        size='small'
                      />
                    </div>
                  ),
                },

                {
                  title: 'Status',

                  render: (_, record) => {
                    let color = 'blue'

                    if (
                      record.status ===
                      'Highly Productive'
                    ) {
                      color = 'green'
                    }

                    if (
                      record.status ===
                      'Distracting'
                    ) {
                      color = 'red'
                    }

                    return (
                      <Tag color={color}>
                        {record.status}
                      </Tag>
                    )
                  },
                },
              ]}
            />
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}