import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';

export const MotionBox = ({ children, ...rest } : any) => {
  return (
    <motion.div
      initial={{ x:-700, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -700, opacity: 0 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};