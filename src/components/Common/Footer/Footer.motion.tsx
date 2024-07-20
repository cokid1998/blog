"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Variants } from "framer-motion";

export const FooterIconVariants: Variants = {
  init: {
    opacity: 0.6,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};
export const MotionSvg = motion.svg;
export const MotionPath = motion.path;
export const MotionLink = motion(Link);
export const MotionDiv = motion.div;
