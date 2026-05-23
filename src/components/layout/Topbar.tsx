import {
  BellOutlined,
  DownOutlined,
  LogoutOutlined,
  PlusOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'

import {
  Avatar,
  Button,
  Dropdown,
  Input,
  
} from 'antd'

import type { MenuProps } from 'antd'

import { useNavigate } from 'react-router-dom'

export default function Topbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')

    navigate('/login')
  }

  const profileItems: MenuProps['items'] = [
    {
      key: 'organization',

      label: (
        <div className='min-w-[220px]'>
          <p className='font-semibold'>
            WorkEthics Inc.
          </p>

          <p className='text-xs text-slate-500'>
            Organization
          </p>
        </div>
      ),
    },

    {
      type: 'divider',
    },

    {
      key: 'members-title',

      label: (
        <p className='text-xs uppercase text-slate-400'>
          Members
        </p>
      ),
    },

    {
      key: 'member-1',

      icon: <UserOutlined />,

      label: 'John Doe',
    },

    {
      key: 'member-2',

      icon: <UserOutlined />,

      label: 'Sarah Jenkins',
    },

    {
      key: 'member-3',

      icon: <UserOutlined />,

      label: 'Michael Chen',
    },

    {
      type: 'divider',
    },

    {
      key: 'settings',

      icon: <SettingOutlined />,

      label: 'Account Settings',
    },

    {
      key: 'logout',

      icon: <LogoutOutlined />,

      danger: true,

      label: 'Sign Out',

      onClick: handleLogout,
    },
  ]

  return (
    <header className='h-16 border-b border-slate-800 bg-slate-950 px-6 flex items-center justify-between'>
      {/* SEARCH */}

      <div className='w-full max-w-md'>
        <Input.Search
          placeholder='Search employees, apps, reports...'
          size='large'
        />
      </div>

      {/* ACTIONS */}

      <div className='flex items-center gap-4'>
        {/* NOTIFICATION */}

        <button className='relative text-xl text-slate-300 hover:text-white transition'>
          <BellOutlined />

          <span className='absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500'></span>
        </button>

        {/* ADD USERS */}

        <Button
          type='primary'
          icon={<PlusOutlined />}
          size='large'
        >
          Add Users
        </Button>

        {/* PROFILE DROPDOWN */}

        <Dropdown
          menu={{
            items: profileItems,
          }}
          trigger={['click']}
          placement='bottomRight'
        >
          <button className='flex items-center gap-3 hover:bg-slate-900 px-2 py-1 rounded-xl transition'>
            <Avatar
              size='large'
              icon={<UserOutlined />}
            />

            <div className='text-left hidden md:block'>
              <p className='text-sm font-medium leading-none'>
                Admin User
              </p>

              <span className='text-xs text-slate-400'>
                Super Admin
              </span>
            </div>

            <DownOutlined className='text-xs text-slate-400' />
          </button>
        </Dropdown>
      </div>
    </header>
  )
}