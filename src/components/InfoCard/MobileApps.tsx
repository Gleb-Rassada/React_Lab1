import React from "react";
import styles from "./MobileApps.module.css";
import image_3 from "../../assets/image_3.png";
import blackLine from "../../assets/black_line.png";

interface IProps {
   className?: string;
}

const MobileApps: React.FC<IProps> = ({ className }) => {
   return (
      <div className={`${className} ${styles.container}`}>
         <div className={styles.textContainer}>
            <div className={styles.text}>
               <h1>
                  {" "}
                  Download our <br /> mobile apps{" "}
               </h1>
               <img
                  src={blackLine}
                  alt="blackLine"
                  className={styles.blackLine}
               />
               <h3>
                  Our dedicated patient engagement app and
                  <br />
                  web portal allow you to access information
                  <br />
                  instantaneously (no tedeous form, long calls,
                  <br />
                  or administrative hassle) and securely
               </h3>
               <button className={styles.button}>Download ↓</button>
            </div>
            <img src={image_3} alt="image_3" className={styles.image_3} />
         </div>
      </div>
   );
};

export default MobileApps;
