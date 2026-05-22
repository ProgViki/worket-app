import { Avatar, Card, Tag } from 'antd'

const users = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    app: 'VS Code',
    status: 'Productive',
  },

  {
    id: 2,
    name: 'Michael Chen',
    app: 'Figma',
    status: 'Idle',
  },
]

export default function Timeline() {
  return (
    <Card title='Live Activity'>
      <div className='space-y-4'>
        {users.map((user) => (
          <div
            key={user.id}
            className='flex items-center justify-between'
          >
            <div className='flex items-center gap-3'>
              <Avatar>
                {user.name[0]}
              </Avatar>

              <div>
                <p>{user.name}</p>

                <span className='text-slate-400 text-sm'>
                  {user.app}
                </span>
              </div>
            </div>

            <Tag
              color={
                user.status === 'Productive'
                  ? 'green'
                  : 'orange'
              }
            >
              {user.status}
            </Tag>
          </div>
        ))}
      </div>
    </Card>
  )
}