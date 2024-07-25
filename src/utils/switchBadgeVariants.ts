export const switchBadgeVariants = (category: string) => {
  switch (category) {
    case "":
      return "disable";
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

export const switchCategoryBadgeVariants = (category: string) => {
  switch (category) {
    case "ALL":
      return "ALL";
    case "NEXT.JS":
      return "categoryNext";
    case "FRONT-END":
      return "categoryFrontEnd";
    case "REACT":
      return "categoryReact";
    case "disable":
      return "disable";
    default:
      "disable";
  }
};
