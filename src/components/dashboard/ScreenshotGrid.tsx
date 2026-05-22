import { Card } from 'antd'

const screenshots = [
  '/screenshots/1.png',
  '/screenshots/2.png',
  '/screenshots/3.png',
]

export default function ScreenshotGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {screenshots.map((image, index) => (
        <Card key={index} hoverable>
          <img
            src={image}
            className='rounded-lg'
          />
        </Card>
      ))}
    </div>
  )
}