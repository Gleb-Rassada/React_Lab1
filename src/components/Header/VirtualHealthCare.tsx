import React from "react";
import styles from "./VirtualHealthCare.module.css";
import image_1 from "../../assets/image_1.png";
import dots_rectangle from "../../assets/dots_rectangle.png";

interface IProps {
   className?: string;
}

const VirtualHealthCare: React.FC<IProps> = ({ className }) => {
   return (
      <div className={`${className} ${styles.container}`}>
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
                  <div className={styles.button}>Consult today</div>
               </div>

               <img src={image_1} alt="image_1" className={styles.image_1} />
            </div>
         </div>
      </div>
   );
};

export default VirtualHealthCare;
