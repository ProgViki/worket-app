import { Layout, Drawer } from 'antd'

import {
  MenuOutlined,
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

      <div className='lg:hidden h-16 border-b border-slate-800 bg-slate-950 px-4 flex items-center'>
        <button
            onClick={() => setOpen(true)}
            className='h-10 w-10 rounded-xl border border-slate-800 bg-white flex items-center justify-center text-white text-lg hover:bg-slate-800 transition'
          >
            <MenuOutlined className="text-white"/>
       </button>

          <h2 className='ml-4 text-lg font-semibold text-white'>
            WorkEthics
          </h2>
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