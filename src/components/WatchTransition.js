"use client";
import { motion } from "framer-motion";
import styles from "../styles/watch.module.css";

export default function WatchTransition({ size }) {
  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ scale: size === "large" ? 1.5 : 1 }}
      animate={{ scale: size === "small" ? 1 : 1.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ willChange: "transform" }}
    >
      <motion.img
        src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
        alt="Apple Watch"
        width={300}
        height={300}
        className={styles.watchImage}
        initial={{ scale: size === "large" ? 1.5 : 1 }}
        animate={{ scale: size === "small" ? 1 : 1.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />
    </motion.div>
  );
}
