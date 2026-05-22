import {
  ArrowLeftOutlined,
} from '@ant-design/icons'

import {
  Button,
  Card,
  Form,
  Input,
  message,
} from 'antd'

import { useState } from 'react'

import {
  Link,
  useNavigate,
} from 'react-router-dom'

export default function ForgotPasswordPage() {
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const handleEmailSubmit = () => {
    message.success(
      'OTP sent successfully'
    )

    setStep(2)
  }

  const handleOtpSubmit = (values: any) => {
    console.log(values)

    message.success(
      'Password reset successful'
    )

    navigate('/login')
  }

  return (
    <div className='min-h-screen bg-slate-950 flex items-center justify-center px-4'>
      <Card className='w-full max-w-md rounded-2xl'>
        {/* BACK BUTTON */}

        <button
          onClick={() => navigate(-1)}
          className='flex items-center gap-2 text-slate-400 hover:text-white transition mb-5'
        >
          <ArrowLeftOutlined />

          <span className='text-sm'>
            Back
          </span>
        </button>

        <div className='mb-5'>
          <h1 className='text-2xl font-bold'>
            Forgot Password
          </h1>

          <p className='text-slate-400 mt-1 text-sm'>
            {step === 1
              ? 'Enter your email address'
              : 'Enter OTP and new password'}
          </p>
        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <Form
            layout='vertical'
            onFinish={handleEmailSubmit}
          >
            <Form.Item
              name='email'
              label='Email'
              className='mb-4'
              rules={[
                {
                  required: true,
                  message: 'Email required',
                },
              ]}
            >
              <Input
                size='large'
                className='py-2'
                placeholder='john@example.com'
              />
            </Form.Item>

            <Button
              type='primary'
              htmlType='submit'
              size='large'
              block
              className='h-11'
            >
              Send OTP
            </Button>
          </Form>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <Form
            layout='vertical'
            onFinish={handleOtpSubmit}
          >
            <Form.Item
              name='otp'
              label='OTP Code'
              className='mb-4'
              rules={[
                {
                  required: true,
                  message: 'OTP required',
                },
              ]}
            >
              <Input.OTP
                length={6}
                size='large'
              />
            </Form.Item>

            <Form.Item
              name='password'
              label='New Password'
              className='mb-5'
              rules={[
                {
                  required: true,
                  message: 'Password required',
                },
              ]}
            >
              <Input.Password
                size='large'
                className='py-2'
                placeholder='Enter new password'
              />
            </Form.Item>

            <Button
              type='primary'
              htmlType='submit'
              size='large'
              block
              className='h-11'
            >
              Reset Password
            </Button>
          </Form>
        )}

        {/* LOGIN LINK */}

        <div className='mt-5 text-center text-sm'>
          <span className='text-slate-400'>
            Remember your password?
          </span>

          <Link
            to='/login'
            className='ml-2 text-primary font-medium'
          >
            Login
          </Link>
        </div>
      </Card>
    </div>
  )
}