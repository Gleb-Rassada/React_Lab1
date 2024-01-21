import React from "react";
import styles from "./Header.module.css";
import image_1 from "../../assets/image_1.png";
import dots_rectangle from "../../assets/dots_rectangle.png";

interface IProps {
   className?: string;
}

const Header: React.FC<IProps> = ({ className }) => {
   return (
      <div className={`${className} ${styles.container}`}>
         <header className={styles.header}>
            <div className={styles.logo}>
               <div className={styles.circle}>
                  <span className={styles.t_letter}>T</span>
               </div>
               <div className={styles.HealthCare}>HealthCare</div>
            </div>
            {/* ссылки навигации */}
            <nav className={styles.navigation}>
               <ul className={styles.navigationList}>
                  <li>
                     <a href="home" className={styles.navigationLink}>
                        Home
                     </a>
                  </li>
                  <li>
                     <a href="/find_a_doctor" className={styles.navigationLink}>
                        Find a doctor
                     </a>
                  </li>
                  <li>
                     <a href="/apps" className={styles.navigationLink}>
                        Apps
                     </a>
                  </li>
                  <li>
                     <a href="/testimonials" className={styles.navigationLink}>
                        Testimonials
                     </a>
                  </li>
                  <li>
                     <a href="/about_us" className={styles.navigationLink}>
                        About us
                     </a>
                  </li>
               </ul>
            </nav>
         </header>
         {/* прямоугольник */}
         <img
            src={dots_rectangle}
            alt="dots_rectangle"
            className={styles.dotsRectangle}
         />
         {/* Текст и картинка */}
         <div className={styles.contentBox}>
            <div className={styles.textContainer}>
               <div className={styles.text}>
                  <h1>
                     {" "}
                     Virtual healthcare
                     <br /> for you{" "}
                  </h1>
                  <h2>
                     Our service provides progressive, and <br /> affordable
                     healthcare, accessible on mobile <br /> and online for
                     everyone
                  </h2>
                  {/* Синяя кнопка */}
                  <div className={styles.blueButton}></div>
                  <button className={styles.blueButton}>
                     <h3 className={styles.blueButtonText}>Consult today</h3>
                  </button>
               </div>

               <img src={image_1} alt="image_1" className={styles.image_1} />
            </div>
         </div>
      </div>
   );
};

export default Header;
