import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import {
  Card,
  Avatar,
  Tag,
  Timeline,
  Input,
} from 'antd'

const activities = Array.from({
  length: 8,
})

export default function TimelinePage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Timeline'
        subtitle='Employee realtime activity logs'
      />

      <div className='mb-6'>
        <Input.Search
          placeholder='Search employee'
          size='large'
          className='max-w-xl'
        />
      </div>

      <Card className='bg-slate-900 border-slate-800'>
        <Timeline
          items={activities.map((_, index) => ({
            children: (
              <div className='pb-5'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                  <div className='flex items-start gap-4'>
                    <Avatar size={50} />

                    <div>
                      <h3 className='text-white font-medium'>
                        Sarah Jenkins
                      </h3>

                      <p className='text-slate-400 text-sm mt-1'>
                        Working on VS Code
                      </p>

                      <div className='flex flex-wrap items-center gap-2 mt-3'>
                        <Tag color='blue'>
                          github.com
                        </Tag>

                        <Tag color='green'>
                          Productive
                        </Tag>
                      </div>
                    </div>
                  </div>

                  <p className='text-slate-500 text-sm'>
                    10:4{index} AM
                  </p>
                </div>
              </div>
            ),
          }))}
        />
      </Card>
    </DashboardLayout>
  )
}