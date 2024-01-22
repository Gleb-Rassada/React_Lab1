import React from "react";
import styles from "./HealthCareProviders.module.css";
import image_2 from "../../assets/image_2.png";
import blackLine from "../../assets/black_line.png";
import dotsRectangle from "../../assets/dots_rectangle.png";

interface IProps {
   className?: string;
}

const HealthCareProviders: React.FC<IProps> = ({ className }) => {
   return (
      <div className={`${className} ${styles.container}`}>
         <div className={styles.textContainer}>
            <img src={image_2} alt="image_2" className={styles.image_2} />
            <div className={styles.text}>
               <h1>
                  {" "}
                  Leading healthcare
                  <br /> providers
               </h1>
               <img
                  src={blackLine}
                  alt="blackLine"
                  className={styles.blackLine}
               />
               <h3>
                  We provides progressive, and affordable healthcare,
                  <br />
                  accessible on mobile and online for everyone. To us, it’s
                  <br />
                  not just work. We take pride in the solutions we deliver
               </h3>
               <button className={styles.button}>Consult today</button>
            </div>
         </div>
         <img
            src={dotsRectangle}
            alt="dotsRectangle"
            className={styles.dotsRectangle}
         />
      </div>
   );
};

export default HealthCareProviders;
