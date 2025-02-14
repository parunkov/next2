import { FC } from 'react'
import styles from './Aside.module.scss'

const Aside: FC = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <div className={styles.avatarWrapper}>
          <img 
            src="/avatar.jpg" 
            alt="Фото профиля"
            className={styles.avatar}
          />
          <span className={styles.onlineStatus} />
        </div>
        
        <h1 className={styles.name}>Darrell Steward</h1>
        <p className={styles.info}>@vladweb / На сервисе 1 год</p>
        
        <span className={styles.status}>В сети</span>

        <div className={styles.stats}>
          <div className={styles.statsItem}>
            <p className={styles.statsValue}>345</p>
            <p className={styles.statsLabel}>Всего заказов</p>
          </div>
          <div className={styles.statsItem}>
            <p className={styles.statsValue}>
              <span className={styles.positive}>+34</span> / 
              <span className={styles.negative}>-3</span>
            </p>
            <p className={styles.statsLabel}>Отзывы</p>
          </div>
          <div className={styles.statsItem}>
            <p className={styles.statsValue}>4</p>
            <p className={styles.statsLabel}>Активные заказы</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside 