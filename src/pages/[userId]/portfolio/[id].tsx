import { FC } from "react";
import styles from "./Portfolio.module.scss";
import Aside from "@/components/Aside";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MobileHeader from "@/components/MobileHeader/MobileHeader";

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

  const falmeImg = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.23906 3.12188C8.62969 2.14688 7.8375 1.30782 7.14844 0.618754C7.10594 0.576633 7.05398 0.545294 6.9969 0.527354C6.93981 0.509413 6.87927 0.505393 6.82031 0.515629C6.76094 0.52498 6.70473 0.548645 6.65655 0.584579C6.60836 0.620513 6.56965 0.667636 6.54375 0.721879L5.09531 3.75938L3.58594 2.75157C3.50315 2.69677 3.40219 2.67657 3.30469 2.69532C3.25632 2.70486 3.21031 2.72385 3.16929 2.7512C3.12827 2.77855 3.09304 2.81372 3.06563 2.85469C2.15156 4.23282 1.6875 5.47969 1.6875 6.5625C1.6875 7.70625 2.14185 8.80315 2.9506 9.6119C3.75935 10.4207 4.85625 10.875 6 10.875C7.14375 10.875 8.24065 10.4207 9.0494 9.6119C9.85815 8.80315 10.3125 7.70625 10.3125 6.5625C10.3125 5.39532 9.96094 4.27032 9.23906 3.12188ZM8.77969 6.99375C8.69101 7.58495 8.41504 8.13211 7.99232 8.55483C7.56961 8.97754 7.02245 9.25352 6.43125 9.34219H6.375C6.28091 9.34149 6.19053 9.30545 6.12178 9.24121C6.05303 9.17698 6.01094 9.08925 6.00386 8.99542C5.99677 8.9016 6.02522 8.80855 6.08355 8.73472C6.14188 8.66089 6.22583 8.61169 6.31875 8.59688C6.74971 8.52682 7.14772 8.323 7.45645 8.01427C7.76518 7.70553 7.969 7.30752 8.03906 6.87657C8.04425 6.82606 8.05964 6.77713 8.0843 6.73274C8.10896 6.68836 8.14237 6.64945 8.18252 6.61836C8.22266 6.58728 8.26871 6.56467 8.31785 6.55191C8.36699 6.53914 8.41822 6.5365 8.46842 6.54412C8.51862 6.55175 8.56674 6.56949 8.60988 6.59626C8.65302 6.62304 8.69027 6.6583 8.71938 6.69991C8.74848 6.74151 8.76883 6.78859 8.7792 6.8383C8.78957 6.888 8.78973 6.9393 8.77969 6.98907V6.99375Z" fill="#F8285A"/>
  </svg>
  `;

  const safeImg = `<svg width="12.000000" height="12.000000" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<rect id="card/Variant3" rx="0.000000" width="11.000000" height="11.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<path id="Vector" d="M9.75 1.87L2.25 1.87C2.05 1.87 1.86 1.95 1.71 2.09C1.57 2.23 1.5 2.42 1.5 2.62L1.5 5.37C1.5 9.56 5.05 10.95 5.76 11.19C5.91 11.24 6.08 11.24 6.23 11.19C6.94 10.95 10.5 9.56 10.5 5.37L10.5 2.62C10.5 2.42 10.42 2.23 10.28 2.09C10.13 1.95 9.94 1.87 9.75 1.87ZM8.32 5.14L5.57 7.77C5.5 7.83 5.4 7.87 5.31 7.87C5.21 7.87 5.12 7.83 5.05 7.77L3.67 6.45C3.64 6.42 3.61 6.38 3.58 6.34C3.56 6.29 3.55 6.24 3.55 6.19C3.54 6.14 3.55 6.09 3.57 6.04C3.59 5.99 3.61 5.95 3.65 5.91C3.68 5.88 3.73 5.85 3.77 5.83C3.82 5.81 3.87 5.8 3.92 5.8C3.97 5.8 4.02 5.81 4.07 5.83C4.11 5.85 4.16 5.87 4.19 5.91L5.31 6.97L7.8 4.6C7.87 4.53 7.97 4.5 8.06 4.51C8.16 4.51 8.25 4.55 8.32 4.62C8.38 4.69 8.42 4.79 8.42 4.88C8.42 4.98 8.38 5.07 8.32 5.14Z" fill="#17C653" fill-opacity="1.000000" fill-rule="nonzero"/>
  </svg>
  `;

  const heartImg = `
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 14C8 14 1.75 10.5 1.75 6.25001C1.75 5.49868 2.01031 4.77057 2.48664 4.18954C2.96297 3.60851 3.62589 3.21046 4.36262 3.06312C5.09935 2.91577 5.86438 3.02823 6.52754 3.38136C7.1907 3.73449 7.71103 4.30648 8 5.00001V5.00001C8.28897 4.30648 8.8093 3.73449 9.47246 3.38136C10.1356 3.02823 10.9006 2.91577 11.6374 3.06312C12.3741 3.21046 13.037 3.60851 13.5134 4.18954C13.9897 4.77057 14.25 5.49868 14.25 6.25001C14.25 10.5 8 14 8 14Z" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const eyeImg = `
  <svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect id="eye-open" rx="0.000000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
    <path id="Icon" d="M8 12.57C3.11 12.49 1.59 8.07 1.59 8.07C1.59 8.07 3.05 3.42 8 3.42C12.94 3.42 14.4 8.07 14.4 8.07C14.4 8.07 12.88 12.65 8 12.57ZM8 9.57C7.11 9.57 6.39 8.87 6.39 8.01C6.39 7.15 7.11 6.46 8 6.46C8.88 6.46 9.59 7.15 9.59 8.01C9.59 8.87 8.88 9.57 8 9.57Z" stroke="#484848" stroke-opacity="1.000000" stroke-width="2.000000"/>
  </svg>
  `;

  const likeImg = `
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 20.4501C12 20.4501 2.625 15.2001 2.625 8.82508C2.625 7.6981 3.01546 6.60593 3.72996 5.73439C4.44445 4.86284 5.43884 4.26577 6.54393 4.04475C7.64903 3.82373 8.79657 3.99242 9.79131 4.52211C10.7861 5.05181 11.5665 5.90979 12 6.95008C12.4335 5.90979 13.2139 5.05181 14.2087 4.52211C15.2034 3.99242 16.351 3.82373 17.4561 4.04475C18.5612 4.26577 19.5555 4.86284 20.27 5.73439C20.9845 6.60593 21.375 7.6981 21.375 8.82508C21.375 15.2001 12 20.4501 12 20.4501Z" fill="#F8285A"/>
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
              <span
                className={styles.edit}
                dangerouslySetInnerHTML={{ __html: editImg }}
              ></span>
              <span
                className={styles.delete}
                dangerouslySetInnerHTML={{ __html: deleteImg }}
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
