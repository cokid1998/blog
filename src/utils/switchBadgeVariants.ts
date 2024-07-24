export const switchBadgeVariants = (category: string) => {
  switch (category) {
    case "NEXT.JS":
      return "NEXT";
    case "FRONT-END":
      return "FRONTEND";
    case "REACT":
      return "REACT";
    default:
      "default";
  }
};
