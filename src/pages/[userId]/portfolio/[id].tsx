import { FC } from 'react'
import { useRouter } from 'next/router'

const PortfolioPage: FC = () => {
  const router = useRouter()
  const { userId, id } = router.query

  return (
    <div>
      <h1>Страница портфолио</h1>
      <div>ID пользователя: {userId}</div>
      <div>ID портфолио: {id}</div>
    </div>
  )
}

export default PortfolioPage 