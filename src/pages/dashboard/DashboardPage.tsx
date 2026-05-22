import { Col, Row } from 'antd'
import DashboardLayout from '../../components/layout/DashboardLayout'
import StatCard from '../../components/common/StatCard'
import Timeline from '../../components/dashboard/Timeline'
import AppUsageList from '../../components/dashboard/AppUsageList'
import ScreenshotGrid from '../../components/dashboard/ScreenshotGrid'



export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className='space-y-6'>
        <div>
          <h1 className='text-3xl font-bold'>
            Dashboard
          </h1>

          <p className='text-slate-400'>
            Productivity Overview
          </p>
        </div>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} xl={6}>
            <StatCard
              title='Total Hours'
              value='84h 15m'
            />
          </Col>

          <Col xs={24} md={12} xl={6}>
            <StatCard
              title='Productivity'
              value='85%'
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} xl={16}>
            <Timeline />
          </Col>

          <Col xs={24} xl={8}>
            <AppUsageList />
          </Col>
        </Row>

        <ScreenshotGrid />
      </div>
    </DashboardLayout>
  )
}