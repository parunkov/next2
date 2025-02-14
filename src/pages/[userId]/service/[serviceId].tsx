import { FC } from 'react'
import { useRouter } from 'next/router'

const ServicePage: FC = () => {
  const router = useRouter()
  const { userId, serviceId } = router.query

  return (
    <div>
      <h1>Страница сервиса</h1>
      <div>ID пользователя: {userId}</div>
      <div>ID сервиса: {serviceId}</div>
    </div>
  )
}

export default ServicePage 