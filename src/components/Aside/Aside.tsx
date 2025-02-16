import { FC } from 'react'
import styles from './Aside.module.scss'

interface AsideProps {
  name: string;
  username: string;
  serviceTime: string;
  totalOrders: number;
  reviews: {
    positive: number;
    negative: number;
  };
  activeOrders: number;
  avatar: string;
}

const Aside: FC<AsideProps> = ({
  name,
  username,
  serviceTime,
  totalOrders,
  reviews,
  activeOrders,
  avatar
}) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <div className={styles.avatarWrapper}>
          <img 
            src={avatar}
            alt="Фото профиля"
            className={styles.avatar}
          />
          <span className={styles.onlineStatus} />
        </div>
        
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.info}>@{username} / {serviceTime}</p>
        
        <span className={styles.status}>В сети</span>

        <div className={styles.stats}>
          <div className={styles.statsItem}>
            <p className={styles.statsValue}>{totalOrders}</p>
            <p className={styles.statsLabel}>Всего заказов</p>
          </div>
          <div className={styles.statsItem}>
            <p className={styles.statsValue}>
              <span className={styles.positive}>+{reviews.positive}</span> / 
              <span className={styles.negative}>-{reviews.negative}</span>
            </p>
            <p className={styles.statsLabel}>Отзывы</p>
          </div>
          <div className={styles.statsItem}>
            <p className={styles.statsValue}>{activeOrders}</p>
            <p className={styles.statsLabel}>Активные заказы</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside 