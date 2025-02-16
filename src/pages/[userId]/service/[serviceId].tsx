import { FC } from "react";
import styles from "./Service.module.scss";
import Aside from "@/components/Aside";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { editImg, deleteImg } from "@/icons/serviceIcons";

const ServicePage: FC = () => {
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
          <div className={styles.serviceContent}>
            <div className={styles.serviceImage}>
              <img
                src="/images/des.jpg"
                alt="Дизайн мобильного приложения"
                className={styles.mainImage}
              />
            </div>
            <div className={styles.serviceHeader}>
              <h1>Разработка веб сайта</h1>
              <div className={styles.actions}>
                <button
                  className={styles.edit}
                  dangerouslySetInnerHTML={{ __html: editImg }}
                />
                <button
                  className={styles.delete}
                  dangerouslySetInnerHTML={{ __html: deleteImg }}
                />
              </div>
            </div>

            <div className={styles.price}>100 000 ₽/проект</div>

            <div className={styles.serviceDescription}>
              Figma connection vector asset line. Thumbnail outline asset line.
              Thumbnail outline asset line. Prototype flatten line. Align hand
              connection vector effect. Selection connection clip polygon blur.
              Stroke variant slice team font. Lorem ipsum effect. Stroke effect
              align. Ellipse draft pixel.Underline asset thumbnail line share.
              Thumbnail outline create fill figma hand. Align align image
              follower vector project. Rotate flatten fill connection union
              device. Connection boolean group follower outline line. Lorem line
              hand create fill. Layer frame hand create select.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
