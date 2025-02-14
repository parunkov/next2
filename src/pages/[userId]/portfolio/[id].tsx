import { FC } from 'react'
import Aside from '@/components/Aside'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'

const PortfolioPage: FC = () => {

  const breadcrumbItems = [
    { label: 'Специалисты', href: '/' },
    { label: 'Darrell Steward', href: `/` },
    { label: 'Дизайн мобильного приложения' }
  ]

  return (
    <div>
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />
        <Aside />
        <main>
        </main>
      </div>
    </div>
  )
}

export default PortfolioPage 