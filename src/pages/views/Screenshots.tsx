import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import {
  Card,
  Tag,
  Select,
  Input,
} from 'antd'

const screenshots = Array.from({
  length: 12,
})

export default function ScreenshotsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Screenshots'
        subtitle='Realtime employee screenshots'
      />

      {/* FILTERS */}

      <div className='flex flex-col lg:flex-row gap-4 mb-6'>
        <Input.Search
          size='large'
          placeholder='Search employee'
          className='w-full'
        />

        <div className='flex gap-3 w-full lg:w-auto'>
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

          <Select
            size='large'
            defaultValue='today'
            className='w-full lg:w-44'
            options={[
              {
                label: 'Today',
                value: 'today',
              },
            ]}
          />
        </div>
      </div>

      {/* GRID */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
        {screenshots.map((_, index) => (
          <Card
            key={index}
            className='bg-slate-900 border-slate-800 overflow-hidden'
            bodyStyle={{
              padding: 0,
            }}
          >
            <img
              src='https://placehold.co/600x400'
              className='w-full h-52 object-cover'
            />

            <div className='p-4'>
              <div className='flex items-center justify-between mb-3 gap-3'>
                <h3 className='text-white font-medium truncate'>
                  Sarah Jenkins
                </h3>

                <Tag color='green'>
                  92%
                </Tag>
              </div>

              <p className='text-slate-400 text-sm'>
                VS Code • 10:42 AM
              </p>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}