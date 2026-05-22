import { Layout } from 'antd'
import Sidebar from './Sidebar'
import Topbar from './Topbar'



const { Content } = Layout

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <Sidebar />

      <Layout>
        <Topbar />

        <Content className='p-6 bg-slate-950 min-h-screen'>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}