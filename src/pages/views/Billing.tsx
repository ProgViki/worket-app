import DashboardLayout from '../../components/layout/DashboardLayout'

import PageHeader from '../../components/common/PageHeader'

import { Button, Card, Table, Tag } from 'antd'

const invoices = [
  {
    key: 1,
    invoice: '#INV-1024',
    amount: '$240',
    date: 'May 10, 2026',
    status: 'Paid',
  },

  {
    key: 2,
    invoice: '#INV-1023',
    amount: '$240',
    date: 'April 10, 2026',
    status: 'Paid',
  },
]

export default function BillingPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title='Billing'
        subtitle='Manage subscriptions & invoices'
      />

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6'>
        <Card className='bg-slate-900 border-slate-800 xl:col-span-2'>
          <h3 className='text-white text-lg font-semibold mb-2'>
            Pro Organization Plan
          </h3>

          <p className='text-slate-400'>
            120 employees monitored
          </p>

          <div className='mt-6 flex items-center gap-4'>
            <Button type='primary'>
              Upgrade Plan
            </Button>

            <Button>
              Manage Subscription
            </Button>
          </div>
        </Card>

        <Card className='bg-slate-900 border-slate-800'>
          <p className='text-slate-400 text-sm'>
            Monthly Cost
          </p>

          <h2 className='text-4xl font-bold text-white mt-2'>
            $240
          </h2>

          <p className='text-green-400 mt-3 text-sm'>
            Active Subscription
          </p>
        </Card>
      </div>

      <Card className='bg-slate-900 border-slate-800'>
        <Table
          pagination={false}
          dataSource={invoices}
          columns={[
            {
              title: 'Invoice',
              dataIndex: 'invoice',
            },

            {
              title: 'Amount',
              dataIndex: 'amount',
            },

            {
              title: 'Date',
              dataIndex: 'date',
            },

            {
              title: 'Status',

              render: (_, record) => (
                <Tag color='green'>
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