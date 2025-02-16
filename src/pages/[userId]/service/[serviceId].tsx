import { FC } from 'react'
import styles from './Service.module.scss';
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
      <div className={styles.container}>
        <Breadcrumbs items={breadcrumbItems} />
        <div className={styles.content}>
          <Aside 
            name="Darrell Steward"
            username="vladweb"
            serviceTime="На сервисе 1 год"
            totalOrders={345}
            reviews={{
              positive: 34,
              negative: 3
            }}
            activeOrders={4}
          />
          <div className={styles.portfolioContent}></div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage 