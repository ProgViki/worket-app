import {
  Button,
  Card,
  Form,
  Input,
  Select,
} from 'antd'

import {
  Link,
  useNavigate,
} from 'react-router-dom'

export default function RegisterPage() {
  const navigate = useNavigate()

  const onFinish = async (values: any) => {
    console.log(values)

    localStorage.setItem('token', 'demo-token')

    navigate('/')
  }

  return (
    <div className='min-h-screen bg-slate-950 flex items-center justify-center px-4 py-6'>
      <Card className='w-full max-w-lg rounded-2xl'>
        <div className='mb-5'>
          <h1 className='text-2xl font-bold'>
            Create Account
          </h1>

          <p className='text-slate-400 mt-1 text-sm'>
            Setup your admin account
          </p>
        </div>

        <Form
          layout='vertical'
          onFinish={onFinish}
        >
          <div className='grid grid-cols-2 gap-4'>
            <Form.Item
              name='firstName'
              label='First Name'
              className='mb-4'
              rules={[
                {
                  required: true,
                  message: 'Required',
                },
              ]}
            >
              <Input
                size='large'
                className='py-2'
              />
            </Form.Item>

            <Form.Item
              name='lastName'
              label='Last Name'
              className='mb-4'
              rules={[
                {
                  required: true,
                  message: 'Required',
                },
              ]}
            >
              <Input
                size='large'
                className='py-2'
              />
            </Form.Item>
          </div>

          <Form.Item
            name='email'
            label='Email'
            className='mb-4'
            rules={[
              {
                required: true,
                message: 'Required',
              },
            ]}
          >
            <Input
              size='large'
              className='py-2'
            />
          </Form.Item>

          {/* PHONE + GENDER SAME ROW */}

          <div className='grid grid-cols-2 gap-4'>
            <Form.Item
              name='phone'
              label='Phone Number'
              className='mb-4'
            >
              <Input
                size='large'
                className='py-2'
              />
            </Form.Item>

            <Form.Item
              name='gender'
              label='Gender'
              className='mb-4'
            >
              <Select
                size='large'
                placeholder='Select'
                className='custom-select'
                options={[
                  {
                    label: 'Male',
                    value: 'male',
                  },
                  {
                    label: 'Female',
                    value: 'female',
                  },
                ]}
              />
            </Form.Item>
          </div>

          <Form.Item
            name='password'
            label='Password'
            className='mb-4'
            rules={[
              {
                required: true,
                message: 'Required',
              },
            ]}
          >
            <Input.Password
              size='large'
              className='py-2'
            />
          </Form.Item>

          <Form.Item
            name='confirmPassword'
            label='Confirm Password'
            className='mb-5'
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Required',
              },

              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    getFieldValue('password') === value
                  ) {
                    return Promise.resolve()
                  }

                  return Promise.reject(
                    new Error(
                      'Passwords do not match'
                    )
                  )
                },
              }),
            ]}
          >
            <Input.Password
              size='large'
              className='py-2'
            />
          </Form.Item>

          <Button
            type='primary'
            htmlType='submit'
            size='large'
            block
            className='h-11'
          >
            Create Account
          </Button>
        </Form>

        <div className='mt-5 text-center text-sm'>
          <span className='text-slate-400'>
            Already have an account?
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