import React, { useState } from "react";
import { BiFootball } from "react-icons/bi";
import { FaFire } from "react-icons/fa6";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { GiCreditsCurrency } from "react-icons/gi";
const Footer = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  let timer;
  useMotionValueEvent(scrollY, "change", (latest) => {
    clearTimeout(timer);
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    timer = setTimeout(() => {
      setHidden(false);
    }, 1500);
  });

  const variants = {
    hover: { backgroundColor: "#dc2626" },
    default: { backgroundColor: "" },
  };

  const iconContainerVariants = {
    hover: { y: -12 },
    default: { y: 0 },
  };

  return (
    <motion.div
      animate={hidden ? { opacity: 0 } : { opacity: 1 }}
      transition={{ delay: 0 }}
      className="fixed bottom-0 right-0 left-0 bg-dark  text-black px-2"
    >
      <div className="flex sm:hidden gap-4 items-center justify-between">
        <motion.div
          initial="default"
          whileHover="hover"
          variants={iconContainerVariants}
          className="inline-flex flex-col items-center"
        >
          <motion.div variants={variants} className="rounded-full p-1">
            <FaFire size={36} color="#fff" />
          </motion.div>
          <span className="text-xs font-bold text-white">Matches</span>
        </motion.div>

        <motion.div>
          <div className="rounded-full p-1 ">
            <GiCreditsCurrency size={36} color="#fff" />
          </div>
          <span className="text-xs font-bold text-white">Matches</span>
        </motion.div>

        <motion.div
          initial="default"
          whileHover="hover"
          variants={iconContainerVariants}
          className="inline-flex flex-col items-center"
        >
          <motion.div
            // whileHover={{ backgroundColor: "#ccc" }}
            variants={variants}
            className="rounded-full p-1"
          >
            <FaFire size={36} color="#fff" />
          </motion.div>
          <span className="text-xs font-bold text-white">Matches</span>
        </motion.div>

        <motion.div
          initial="default"
          whileHover="hover"
          variants={iconContainerVariants}
          className="inline-flex flex-col items-center"
        >
          <motion.div variants={variants} className="rounded-full p-1">
            <FaFire size={36} color="#fff" />
          </motion.div>
          <span className="text-xs font-bold text-white">Matches</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
