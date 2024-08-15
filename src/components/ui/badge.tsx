import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@src/lib/utils";

type VariantType = {
  [key: string]: string;
};

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        REACT: "border-transparent bg-[#61DAFB] text-primary-foreground",
        NEXT: "border-transparent bg-[#000000] text-primary-foreground",
        FRONTEND: "border-transparent bg-[#4169E1] text-primary-foreground",
        enable:
          "px-4 py-1 text-xs whitespace-pre rounded-xl md:text-sm transition-backgroundColor btn-hover font-bold bg-slate-300 dark:bg-neutral-500 cursor-pointer",
        disable:
          "px-4 py-1 text-xs whitespace-pre rounded-xl md:text-sm transition-backgroundColor btn-hover font-semibold text-neutral-400 bg-slate-200 dark:bg-neutral-700 dark:text-neutral-400 cursor-pointer",
      } as VariantType,
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
