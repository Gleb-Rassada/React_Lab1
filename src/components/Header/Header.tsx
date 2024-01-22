import React from "react";
import styles from "./Header.module.css";

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
      </div>
   );
};
export default Header;
