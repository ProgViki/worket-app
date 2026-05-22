import { Card, Progress } from 'antd'

const apps = [
  {
    name: 'VS Code',
    percent: 85,
  },

  {
    name: 'Figma',
    percent: 65,
  },
]

export default function AppUsageList() {
  return (
    <Card title='Top Apps'>
      <div className='space-y-5'>
        {apps.map((app) => (
          <div key={app.name}>
            <div className='flex justify-between mb-2'>
              <span>{app.name}</span>

              <span>{app.percent}%</span>
            </div>

            <Progress percent={app.percent} />
          </div>
        ))}
      </div>
    </Card>
  )
}