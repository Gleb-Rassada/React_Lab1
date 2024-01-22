import React, { useState } from "react";
import styles from "../Header/Header.module.css";

interface IProps {
   className?: string;
   color?: string;
   buttonText?: string;
   textColor?: string;
   onClick?: () => void;
}

const Button: React.FC<IProps> = ({
   className,
   color,
   buttonText,
   textColor,
   onClick,
}) => {
   const [isHovered, setIsHovered] = useState(false);

   const buttonStyle = {
      backgroundColor: color || "var(--your-button-color-variable, #458FF6)",
      color: textColor || "var(--your-button-text-color-variable, #FFFFFF)",
   };

   const hoverButtonStyle = {
      backgroundColor:
         textColor || "var(--your-button-text-color-variable, #FFFFFF)",
      color: color || "var(--your-button-color-variable, #458FF6)",
   };

   const handleMouseEnter = () => {
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   const currentStyle = isHovered ? hoverButtonStyle : buttonStyle;

   return (
      <button
         className={`${styles.blueButton} ${className}`}
         style={currentStyle}
         onClick={onClick}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         {buttonText}
      </button>
   );
};

export default Button;
