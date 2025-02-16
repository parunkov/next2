import { FC } from "react";
import styles from "./Portfolio.module.scss";
import Aside from "@/components/Aside";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Image from "next/image";

const PortfolioPage: FC = () => {
  const breadcrumbItems = [
    { label: "Специалисты", href: "/" },
    { label: "Darrell Steward", href: `/` },
    { label: "Дизайн мобильного приложения" },
  ];

  const editImg = `
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="16" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3249 12.9071C23.7152 12.5165 24.3482 12.5163 24.7389 12.9065L27.0923 15.2573C27.4831 15.6476 27.4834 16.281 27.0929 16.6717L17.1351 26.635C16.9958 26.7743 16.8184 26.8694 16.6253 26.9083L12.2001 27.8L13.0933 23.38C13.1323 23.1873 13.2272 23.0103 13.3662 22.8712L23.3249 12.9071Z" stroke="#484848" stroke-width="2" stroke-linejoin="round"/>
  </svg>
  `;

  const deleteImg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="16" fill="white"/>
    <path d="M10.4 13.4H29.6M16.4 9.8H23.6M24.2 30.2H15.8C14.4745 30.2 13.4 29.1255 13.4 27.8L12.8521 14.65C12.8237 13.9682 13.3687 13.4 14.0511 13.4H25.949C26.6313 13.4 27.1763 13.9682 27.1479 14.65L26.6 27.8C26.6 29.1255 25.5255 30.2 24.2 30.2Z" stroke="#F8285A" stroke-width="2" stroke-linecap="round"/>
  </svg>
  `;

  return (
    <div>
      <MobileHeader />
      <div className={styles.container}>
        <Breadcrumbs items={breadcrumbItems} />
        <div className={styles.content}>
          <Aside
            avatar="/images/avatar.png"
            name="Darrell Steward"
            username="vladweb"
            serviceTime="1 год"
            totalOrders={345}
            reviews={{
              positive: 34,
              negative: 3,
            }}
            activeOrders={4}
          />
          <div className={styles.portfolioContent}>
            <div className={styles.portfolioHeader}>
              <h1>Дизайн мобильного приложения</h1>
              <span className={styles.edit} dangerouslySetInnerHTML={{ __html: editImg }}></span>
              <span className={styles.delete} dangerouslySetInnerHTML={{ __html: deleteImg }}></span>
            </div>
            <div className={styles.portfolioTags}>
              <span className={`${styles.tag} ${styles.urgent}`}>Срочно</span>
              <span className={`${styles.tag} ${styles.safe}`}>
                Безопасная сделка
              </span>
              <span className={styles.tag}>ФГОС</span>
              <span className={styles.tag}>Обучение</span>
              <span className={styles.tag}>pdf</span>
            </div>
            <div className={styles.portfolioStats}>
              <div className={styles.stat}>
                <Image src="/heart.svg" alt="Likes" width={16} height={16} />
                <span>12</span>
              </div>
              <div className={styles.stat}>
                <Image src="/heart.svg" alt="Likes" width={16} height={16} />
                <span>59</span>
              </div>
            </div>

            <div className={styles.portfolioDescription}>
              <p>
                Figma ipsum component variant main layer. Shadow arrange
                subtract link prototype flatten arrow plugin line. Device
                variant scale prototype effect. Selection content clip polygon
                auto. Stroke variant slice team text ipsum effect scale effect
                align. Ellipse draft pixel underline asset thumbnail line share.
                Thumbnail outline create fill figma hand. Align align image
                follower vector project. Rotate flatten fill connection union
                device. Connection boolean group reesizing underline line.
                Underline hand editor team ellipse component. Layer frame hand
                group select follower.
              </p>
            </div>

            <div className={styles.portfolioImage}>
              <img
                src="/portfolio-image.jpg"
                alt="Дизайн мобильного приложения"
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
