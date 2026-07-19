"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  hoverEffect?: boolean;
  interactive?: boolean;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hoverEffect = true, interactive = false, children, ...props }, ref) => {
    const baseStyles = "glass-card rounded-xl overflow-hidden p-6 md:p-8 flex flex-col h-full";
    const hoverStyles = hoverEffect ? "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300" : "";

    if (interactive) {
      return (
        <motion.div
          ref={ref}
          className={`${baseStyles} ${hoverStyles} ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          whileHover={{ 
            y: -8, 
            scale: 1.02,
            rotateX: 6,
            rotateY: -6,
            boxShadow: "0 20px 45px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${hoverStyles} ${className}`}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
