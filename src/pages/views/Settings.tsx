import DashboardLayout from '../../components/layout/DashboardLayout'
import PageHeader from '../../components/common/PageHeader'

import { Card, Switch } from 'antd'

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Settings'
        subtitle='Organization preferences'
      />

      <div className='space-y-4'>
        <Card className='bg-slate-900 border-slate-800'>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-white font-medium'>
                Screenshot Monitoring
              </h3>

              <p className='text-slate-400 text-sm mt-1'>
                Enable screenshot tracking
              </p>
            </div>

            <Switch defaultChecked />
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}