"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const PostTitleVariants = {
  init: {
    color: "grey",
    x: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    color: "#93C673",
    x: 30,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};
export const PostContainerVariants = {
  init: {
    backgroundColor: "transparent",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  hover: {
    backgroundColor: "#F7F9FB",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};
export const PostTitleArrowVariants = {
  init: {
    opacity: 0,
    transition: {
      ease: "easeIn",
    },
  },
  hover: {
    opacity: 1,
    transition: {
      ease: "easeOut",
    },
  },
};
export const MotionLink = motion(Link);
export const MotionSpan = motion.span;
