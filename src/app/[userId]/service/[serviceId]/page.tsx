import { FC } from 'react'

interface ServicePageProps {
  params: {
    userId: string
    serviceId: string
  }
}

const ServicePage: FC<ServicePageProps> = ({ params }) => {
  const { userId, serviceId } = params

  return (
    <div>
      <h1>Страница сервиса</h1>
      <div>ID пользователя: {userId}</div>
      <div>ID сервиса: {serviceId}</div>
    </div>
  )
}

export default ServicePage 