import { Card } from 'antd'

interface Props {
  title: string
  value: string
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <Card className='bg-slate-900 border-slate-800'>
      <div className='space-y-2'>
        <p className='text-slate-400'>
          {title}
        </p>

        <h2 className='text-3xl font-bold'>
          {value}
        </h2>
      </div>
    </Card>
  )
}