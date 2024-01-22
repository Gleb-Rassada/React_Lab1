import React, { useState } from "react";
import styles from "./Slider.module.css";
import line from "../../assets/white_line.png";
import customer_1 from "../../assets/customer1.jpg";
import customer_2 from "../../assets/customer2.jpg";
import customer_3 from "../../assets/customer3.jpg";
import customer_4 from "../../assets/customer4.jpg";
import leftArrow from "../../assets/arrow_left.png";
import rightArrow from "../../assets/arrow_right.png";
import dotsRectangle from "../../assets/dots_rectangle.png";

interface IProps {
   className?: string;
}
const Slider: React.FC<IProps> = ({ className }) => {
   const reviews = [
      {
         image: <img src={customer_1} className={styles.customer_photo} />,
         name: "James Hetfield",
         position: "Vocalist",
         quote: "I would like to have a beer holder on my guitar, like on boats!",
      },
      //вставлю сюда членов группы металлика
      {
         image: <img src={customer_2} className={styles.customer_photo} />,
         name: "Lars Ulrich",
         position: "Drummer",
         quote: "Every time we release a record, we lose people who can't come to terms with our development.",
      },
      {
         image: <img src={customer_3} className={styles.customer_photo} />,
         name: "Kirk Hammett",
         position: "guitarist",
         quote: "Ideally, a solo should be like a good meal. You start with a hard one, then a meaty middle part, and then a pleasant ending.",
      },
      {
         image: <img src={customer_4} className={styles.customer_photo} />,
         name: "Emily Smith",
         position: "Bassist",
         quote: "Every album you make, every piece of music, you never know how the world will react to it.",
      },
   ];

   const [currentSlide, setCurrentSlide] = useState(0);

   const handleSlideChange = (index: number) => {
      setCurrentSlide(index);
   };

   return (
      <>
         <div className={`${className} ${styles.container}`}>
            <div className={styles.card}>
               <div className={styles.title}>What our customers are saying</div>
               <img src={line} className={styles.line} />
               <div className={styles.customerContainer}>
                  <div className={styles.customer}>
                     {reviews[currentSlide].image}
                  </div>
                  <div className={styles.customerDetails}>
                     <div className={styles.name}>
                        {reviews[currentSlide].name}
                     </div>
                     <div className={styles.pos_at_work}>
                        {reviews[currentSlide].position}
                     </div>
                  </div>
                  <div className={styles.quote}>
                     {reviews[currentSlide].quote}
                  </div>
                  <img src={dotsRectangle} className={styles.dotsRectangle2} />
                  <img src={dotsRectangle} className={styles.dotsRectangle} />
               </div>
            </div>
         </div>
         <div className={styles.sliderWithDots}>
            <div className={styles.modal_nav_buttons}>
               <button
                  className={`${styles.modal_nav_button} ${
                     currentSlide === 0 ? styles.disabled : ""
                  }`}
                  onClick={() => handleSlideChange(currentSlide - 1)}
                  disabled={currentSlide === 0}
               >
                  <img src={leftArrow} alt="Previous" />
               </button>
               <div className={styles.dot_indicator}>
                  {reviews.map((_, index) => (
                     <div
                        key={index}
                        className={`${styles.dot} ${
                           index === currentSlide ? styles.active_dot : ""
                        }`}
                        onClick={() => handleSlideChange(index)}
                     />
                  ))}
               </div>
               <button
                  className={`${styles.modal_nav_button} ${
                     currentSlide === reviews.length - 1 ? styles.disabled : ""
                  }`}
                  onClick={() => handleSlideChange(currentSlide + 1)}
                  disabled={currentSlide === reviews.length - 1}
               >
                  <img src={rightArrow} alt="Next" />
               </button>
            </div>
         </div>
      </>
   );
};

export default Slider;
