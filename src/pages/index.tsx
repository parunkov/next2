import { FC } from 'react'
import Link from 'next/link'

const HomePage: FC = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <nav>
        <ul>
          <li>
            <Link href="/123/portfolio/456">
              Пример портфолио
            </Link>
          </li>
          <li>
            <Link href="/123/service/789">
              Пример сервиса
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HomePage 