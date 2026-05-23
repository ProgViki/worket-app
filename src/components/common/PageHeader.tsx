interface Props {
  title: string
  subtitle?: string
}

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className='mb-6'>
      <h1 className='text-3xl font-bold text-slate-950'>
        {title}
      </h1>

      {subtitle && (
        <p className='text-slate-400 mt-1'>
          {subtitle}
        </p>
      )}
    </div>
  )
}