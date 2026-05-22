import { Button, Card, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  const onFinish = async (values: any) => {
    console.log(values)

    localStorage.setItem('token', 'demo-token')

    navigate('/')
  }

  return (
    <div className='min-h-screen bg-slate-950 flex items-center justify-center px-4'>
      <Card className='w-full max-w-md rounded-2xl'>
        <div className='mb-5'>
          <h1 className='text-2xl font-bold'>
            Welcome Back
          </h1>

          <p className='text-slate-400 mt-1 text-sm'>
            Sign in to continue
          </p>
        </div>

        <Form
          layout='vertical'
          onFinish={onFinish}
        >
          <Form.Item
            name='email'
            label='Email'
            className='mb-4'
            rules={[
              {
                required: true,
                message: 'Email is required',
              },
            ]}
          >
            <Input
              size='large'
              placeholder='admin@workethics.com'
              className='py-2'
            />
          </Form.Item>

          <Form.Item
            name='password'
            label='Password'
            className='mb-2'
            rules={[
              {
                required: true,
                message: 'Password is required',
              },
            ]}
          >
            <Input.Password
              size='large'
              placeholder='Enter password'
              className='py-2'
            />
          </Form.Item>

          <div className='flex justify-end mb-4'>
            <Link
              to='/forgot-password'
              className='text-sm text-primary'
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type='primary'
            htmlType='submit'
            size='large'
            block
            className='h-11'
          >
            Sign In
          </Button>
        </Form>

        <div className='mt-5 text-center text-sm'>
          <span className='text-slate-400'>
            Don&apos;t have an account?
          </span>

          <Link
            to='/register'
            className='ml-2 text-primary font-medium'
          >
            Register
          </Link>
        </div>
      </Card>
    </div>
  )
}