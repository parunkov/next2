import { FC } from 'react'
import { useRouter } from 'next/router'
import Aside from '@/components/Aside'

const ServicePage: FC = () => {
  const router = useRouter()
  const { userId, serviceId } = router.query

  return (
    <div>
      <Aside />
      <main>
        <h1>Страница сервиса</h1>
        <div>ID пользователя: {userId}</div>
        <div>ID сервиса: {serviceId}</div>
      </main>
    </div>
  )
}

export default ServicePage 