import { FC } from 'react'

interface PortfolioPageProps {
  params: {
    userId: string
    id: string
  }
}

const PortfolioPage: FC<PortfolioPageProps> = ({ params }) => {
  const { userId, id } = params

  return (
    <div>
      <h1>Страница портфолио</h1>
      <div>ID пользователя: {userId}</div>
      <div>ID портфолио: {id}</div>
    </div>
  )
}

export default PortfolioPage 