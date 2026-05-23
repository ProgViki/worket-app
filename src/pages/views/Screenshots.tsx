import DashboardLayout from '../../components/layout/DashboardLayout'
import PageHeader from '../../components/common/PageHeader'

import { Card } from 'antd'

const screenshots = Array.from({
  length: 8,
})

export default function ScreenshotsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Screenshots'
        subtitle='Employee captured screens'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
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
              <h3 className='text-white font-semibold'>
                Sarah Jenkins
              </h3>

              <p className='text-slate-400 text-sm mt-1'>
                VS Code • 10:42 AM
              </p>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}