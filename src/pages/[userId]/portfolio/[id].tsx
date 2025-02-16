import { FC } from "react";
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

  return (
    <div>
      <MobileHeader />
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="content">
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
          <div className="portfolio-content">
            <div className="portfolio-header">
              <h1>Дизайн мобильного приложения</h1>
              <div className="portfolio-tags">
                <span className="tag urgent">Срочно</span>
                <span className="tag safe">Безопасная сделка</span>
                <span className="tag">ФГОС</span>
                <span className="tag">Обучение</span>
                <span className="tag">pdf</span>
              </div>
              <div className="portfolio-stats">
                <div className="stat">
                  <Image
                    src="/heart.svg"
                    alt="Likes"
                    width={16}
                    height={16}
                    className="icon"
                  />
                  <span>12</span>
                </div>
                <div className="stat">
                  <Image
                    src="/heart.svg"
                    alt="Likes"
                    width={16}
                    height={16}
                    className="icon"
                  />
                  <span>59</span>
                </div>
              </div>
            </div>

            <div className="portfolio-description">
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

            <div className="portfolio-image">
              <img
                src="/portfolio-image.jpg"
                alt="Дизайн мобильного приложения"
                className="main-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
