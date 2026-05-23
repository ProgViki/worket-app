import { Layout, Drawer,  Avatar,
  Dropdown, } from 'antd'

import {
  MenuOutlined, UserOutlined
} from '@ant-design/icons'

import { useState } from 'react'

import Sidebar from './Sidebar'
import Topbar from './Topbar'

const { Content } = Layout

interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({
  children,
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Layout className='h-screen overflow-hidden bg-slate-950'>
      {/* DESKTOP SIDEBAR */}

      <div className='hidden lg:block'>
        <Sidebar />
      </div>

      {/* MOBILE DRAWER */}

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement='left'
        width={290}
        closable={false}
        styles={{
          body: {
            padding: 0,
            background: '#020617',
          },
        }}
      >
        <Sidebar mobile />
      </Drawer>

      <Layout className='min-w-0 h-screen overflow-hidden'>
        {/* MOBILE HEADER */}

  <div className='lg:hidden min-h-[76px] border-b border-slate-800 bg-slate-950 px-4 py-4 flex items-center justify-between'>
  {/* LEFT SIDE */}

  <div className='flex items-center gap-4'>
    <button
      onClick={() => setOpen(true)}
      className='flex items-center justify-center text-white text-xl'
    >
      <MenuOutlined style={{color: 'white', fontSize: '18px'}}/>
    </button>

    <h2 className='text-lg font-semibold text-white pt-2'>
      WorkEthics
    </h2>
  </div>

  {/* RIGHT SIDE */}

  <Dropdown
    trigger={['click']}
    placement='bottomRight'
    menu={{
      items: [
        {
          key: 'org',
          label: 'Organization',
        },

        {
          key: 'settings',
          label: 'Account Settings',
        },

        {
          type: 'divider',
        },

        {
          key: 'logout',
          danger: true,
          label: 'Sign Out',
        },
      ],
    }}
  >
    <button className='flex items-center'>
      <Avatar
        size={38}
        icon={<UserOutlined style={{color: 'white', fontSize: '18px'}}/>}
      />
    </button>
  </Dropdown>
</div>

        <Topbar />



<Content className='overflow-y-auto overflow-x-hidden'>



  <div className='p-4 lg:p-6 min-h-full'>
    {children}
  </div>
</Content>
      </Layout>
    </Layout>
  )
}