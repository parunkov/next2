import { FC } from "react";
import styles from "./Portfolio.module.scss";
import Aside from "@/components/Aside";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import { editImg, deleteImg, falmeImg, safeImg, heartImg, eyeImg, likeImg, titleBtnImg } from "@/icons/serviceIcons";

const PortfolioPage: FC = () => {
  const breadcrumbItems = [
    { label: "Специалисты", href: "/" },
    { label: "Darrell Steward", href: `/` },
    { label: "Дизайн мобильного приложения" },
  ];

    return (
    <div>
      <MobileHeader />
      <div className={styles.container}>
        <Breadcrumbs items={breadcrumbItems} />
        <div className={styles.content}>
          <Aside
            avatar="/images/avatar.png"
            prof="Fullstack Web-developer"
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
              <span
                className={styles.edit}
                dangerouslySetInnerHTML={{ __html: editImg }}
              ></span>
              <span
                className={styles.delete}
                dangerouslySetInnerHTML={{ __html: deleteImg }}
              ></span>
              <span
                className={styles.titleBtn}
                dangerouslySetInnerHTML={{ __html: titleBtnImg }}
              ></span>
            </div>
            <div className={styles.portfolioTags}>
              <span className={`${styles.tag} ${styles.urgent}`}>
                <span
                  className={styles.falme}
                  dangerouslySetInnerHTML={{ __html: falmeImg }}
                ></span>
                <span>Срочно</span>
              </span>
              <span className={`${styles.tag} ${styles.safe}`}>
                <span
                  className={styles.safeImg}
                  dangerouslySetInnerHTML={{ __html: safeImg }}
                ></span>
                <span>Безопасная сделка</span>
              </span>
              <span className={styles.tag}>ФГОС</span>
              <span className={styles.tag}>Обучение</span>
              <span className={styles.tag}>pdf</span>
            </div>
            <div className={styles.portfolioStats}>
              <div className={styles.stat}>
                <span
                  className={styles.heartImg}
                  dangerouslySetInnerHTML={{ __html: heartImg }}
                ></span>
                <span>12</span>
              </div>
              <div className={styles.stat}>
                <span
                  className={styles.eyeImg}
                  dangerouslySetInnerHTML={{ __html: eyeImg }}
                ></span>
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
                src="/images/des.jpg"
                alt="Дизайн мобильного приложения"
                className={styles.mainImage}
              />
            </div>
            <div className={styles.portfolioImage}>
              <img
                src="/images/des.jpg"
                alt="Дизайн мобильного приложения"
                className={styles.mainImage}
              />
            </div>
            <div className={styles.like}>
              <span
                className={styles.likeImg}
                dangerouslySetInnerHTML={{ __html: likeImg }}
              ></span>
              <span>Нравится</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
