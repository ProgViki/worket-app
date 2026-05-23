import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage'
import ProtectedRoute from './ProtectedRoutes'
import Overview from '../pages/views/Overview'
import MyTeamPage from '../pages/views/MyTeam'
import ScreenshotsPage from '../pages/views/Screenshots'
import ReportsPage from '../pages/views/Reports'
import RiskUsersPage from '../pages/views/RiskUsers'
import RealtimeAlertsPage from '../pages/views/RealtimeAlerts'
import AppsHistoryPage from '../pages/views/AppsHistory'
import SettingsPage from '../pages/views/Settings'
import DownloadAppPage from '../pages/views/DownloadApp'
import ReviewAppsPage from '../pages/views/ReviewApps'
import BillingPage from '../pages/views/Billing'
import TimelinePage from '../pages/views/Timeline'
import AppsSummaryPage from '../pages/views/AppsSummary'





export default function AppRouter() {
  return (
    <Routes>
      <Route
        path='/login'
        element={<LoginPage />}
      />

      <Route
        path='/register'
        element={<RegisterPage />}
      />

      <Route
        path='/forgot-password'
        element={<ForgotPasswordPage />}
      />

      <Route element={<ProtectedRoute />}>
       
      <Route
        path='/'
        element={<Overview />}
      />

      <Route
        path='/my-team'
        element={<MyTeamPage />}
      />

      <Route
        path='/screenshots'
        element={<ScreenshotsPage />}
      />

      <Route
        path='/timeline'
        element={<TimelinePage />}
      />

      <Route
        path='/reports'
        element={<ReportsPage />}
      />

      <Route
        path='/risk-users'
        element={<RiskUsersPage />}
      />

      <Route
        path='/realtime-alerts'
        element={<RealtimeAlertsPage />}
      />

      <Route
        path='/review-apps'
        element={<ReviewAppsPage />}
      />

      <Route
        path='/apps-history'
        element={<AppsHistoryPage />}
      />

      <Route
        path='/billing'
        element={<BillingPage />}
      />

      <Route
        path='/download-app'
        element={<DownloadAppPage />}
      />

      <Route
        path='/apps-summary'
        element={<AppsSummaryPage />}
      />

      <Route
        path='/settings'
        element={<SettingsPage />}
      />


  
      </Route>
    </Routes>
  )
}