import React from "react";
import styles from "./ServiceCard.module.css";
import black_line from "../../assets/black_line.png";
import Consultation from "../../assets/consultation.png";
import Details_info from "../../assets/details_info.png";
import Emergency_care from "../../assets/emergency_care.png";
import OnlinePharmacy from "../../assets/online_pharmacy.png";
import SearchDoctor from "../../assets/search_doctor.png";
import Tracking from "../../assets/tracking.png";
import cloud from "../../assets/cloud.png";
import dots_square_5 from "../../assets/dots_square_5.png";

interface IProps {
   className?: string;
}

const ServiceCard: React.FC<IProps> = ({ className }) => {
   const photos: string[] = [
      SearchDoctor,
      OnlinePharmacy,
      Consultation,
      Details_info,
      Emergency_care,
      Tracking,
   ];

   const titles: string[] = [
      "Search doctor",
      "Online pharmacy",
      "Consultation",
      "Details info",
      "Emergency care",
      "Tracking",
   ];

   const subtitles: string[] = [
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      "Buy your medicines with our mobile application with a simple delivery system",
      "Free consultation with our trusted doctors and get the best recommendations",
      "Free consultation with our trusted doctors and get the best recommendations",
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
      "Track and save your medical history and health data",
   ];

   return (
      <div className={`${className} ${styles.container}`}>
         <img src={cloud} alt="cloud" className={styles.cloud} />
         <div className={styles.title}>Our services</div>
         <img src={black_line} alt="line" className={styles.black_line} />
         <div className={styles.subtitle}>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment <br />
            with our highly qualified doctors you can consult with us which type
            of service is suitable for your health
         </div>
         <div className={styles.cardContainer}>
            {photos.map((customer, index) => (
               <div className={styles.card} key={index}>
                  <img
                     src={customer}
                     alt={`Photo ${index}`}
                     className={`${styles.photo} ${styles.withMargin}`}
                  />
                  <h2 className={`${styles.titleCard} ${styles.withMargin}`}>
                     {titles[index]}
                  </h2>
                  <p className={`${styles.subtitleCard} ${styles.withMargin}`}>
                     {subtitles[index]}
                  </p>
               </div>
            ))}
         </div>
         <img
            src={dots_square_5}
            alt="dots_square_5"
            className={styles.dots_square_5}
         />
         <button className={styles.button}>Learn more</button>
      </div>
   );
};

export default ServiceCard;
