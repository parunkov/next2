import { FC } from "react";
import styles from "./Aside.module.scss";

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

const mark = `
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 0.8125C10.5895 0.8125 8.23322 1.52728 6.22899 2.86646C4.22477 4.20564 2.66267 6.10907 1.74022 8.33605C0.817781 10.563 0.576427 13.0135 1.04668 15.3777C1.51694 17.7418 2.67769 19.9134 4.38214 21.6179C6.08659 23.3223 8.2582 24.4831 10.6223 24.9533C12.9865 25.4236 15.437 25.1822 17.664 24.2598C19.8909 23.3373 21.7944 21.7752 23.1335 19.771C24.4727 17.7668 25.1875 15.4105 25.1875 13C25.1813 9.76958 23.8953 6.67324 21.611 4.38898C19.3268 2.10472 16.2304 0.818695 13 0.8125ZM18.8008 10.8672L11.9336 17.4297C11.7561 17.5967 11.5211 17.689 11.2773 17.6875C11.1582 17.6892 11.0399 17.6673 10.9293 17.6231C10.8187 17.5788 10.7179 17.5131 10.6328 17.4297L7.19922 14.1484C7.10399 14.0653 7.02654 13.9639 6.97152 13.8501C6.91651 13.7363 6.88507 13.6126 6.8791 13.4863C6.87313 13.3601 6.89274 13.2339 6.93677 13.1154C6.98079 12.997 7.04832 12.8886 7.13528 12.7969C7.22225 12.7052 7.32686 12.632 7.44282 12.5818C7.55879 12.5315 7.68372 12.5053 7.81011 12.5045C7.93649 12.5038 8.06172 12.5286 8.17826 12.5775C8.29481 12.6264 8.40026 12.6984 8.48829 12.7891L11.2773 15.4492L17.5117 9.50781C17.694 9.34878 17.9307 9.26636 18.1724 9.27779C18.414 9.28922 18.6419 9.39362 18.8083 9.56916C18.9748 9.74469 19.0669 9.97778 19.0655 10.2197C19.0641 10.4616 18.9693 10.6936 18.8008 10.8672Z" fill="#17C653"/>
</svg>
`;

const Aside: FC<AsideProps> = ({
  name,
  username,
  serviceTime,
  totalOrders,
  reviews,
  activeOrders,
  avatar,
}) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <div className={styles.avatarWrapper}>
          <img src={avatar} alt="Фото профиля" className={styles.avatar} />
          <span
            className={styles.onlineStatus}
            dangerouslySetInnerHTML={{ __html: mark }}
          />
        </div>

        <h2 className={styles.name}>{name}</h2>
        <p className={styles.info}>
          @{username} / На сервисе {serviceTime}
        </p>

        <span className={styles.status}>
          <span className={styles.statusCircle}></span>
          <span>В сети</span>
        </span>

        <div className={styles.stats}>
          <div className={styles.statsItem}>
            <p className={styles.statsLabel}>Всего заказов</p>
            <p className={styles.statsValue}>{totalOrders}</p>
          </div>
          <div className={styles.statsItem}>
            <p className={styles.statsLabel}>Отзывы</p>
            <p className={styles.statsValue}>
              <span className={styles.positive}>+{reviews.positive}</span> /
              <span className={styles.negative}>-{reviews.negative}</span>
            </p>
          </div>
          <div className={styles.statsItem}>
          <p className={styles.statsLabel}>Активные заказы</p>
            <p className={styles.statsValue}>{activeOrders}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
