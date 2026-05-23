import { Card } from 'antd'

interface Props {
  title: string
  value: string
  icon: React.ReactNode
}

export default function StatsCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <Card
      className='bg-slate-900 border-slate-800 rounded-2xl'
      bodyStyle={{
        padding: 20,
      }}
    >
      <div className='flex items-start justify-between'>
        <div>
          <p className='text-slate-400 text-sm font-medium'>
            {title}
          </p>

          <h2 className='text-3xl font-bold text-white mt-3'>
            {value}
          </h2>
        </div>

        <div className='h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-primary text-2xl'>
          {icon}
        </div>
      </div>
    </Card>
  )
}