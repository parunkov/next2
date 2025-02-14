import { FC } from 'react'
import Aside from '@/components/Aside'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'

const ServicePage: FC = () => {

  const breadcrumbItems = [
    { label: 'Специалисты', href: '/' },
    { label: 'Darrell Steward', href: `/` },
    { label: 'Дизайн мобильного приложения' }
  ]

  return (
    <div>
      <MobileHeader />
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="content">
          <Aside />
          <div className="portfolio-content"></div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage 