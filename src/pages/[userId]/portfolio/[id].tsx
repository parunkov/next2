import { FC } from 'react'
import { useRouter } from 'next/router'
import Aside from '@/components/Aside'

const PortfolioPage: FC = () => {
  const router = useRouter()
  const { userId, id } = router.query

  return (
    <div>
      <Aside />
      <main>
        <h1>Страница портфолио</h1>
        <div>ID пользователя: {userId}</div>
        <div>ID портфолио: {id}</div>
      </main>
    </div>
  )
}

export default PortfolioPage 