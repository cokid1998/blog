"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const PostTitleVariants = {
  init: {
    fill: "#c0c0c5",
    color: "#c0c0c5",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    fill: "#22C564",
    color: "#FFA500",
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
