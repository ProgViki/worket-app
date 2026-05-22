import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage'
import ProtectedRoute from './ProtectedRoutes'
import DashboardPage from '../pages/dashboard/DashboardPage'



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
          element={<DashboardPage />}
        />
      </Route>
    </Routes>
  )
}