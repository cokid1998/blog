"use client";

import { createContext, ReactNode, useState } from "react";

export const CategoryContext = createContext({
  selectCategory: "",
  setSelectCategory: (value: string) => {},
});

type Props = { children: ReactNode };

export default function CategoryProvider({ children }: Props) {
  const [selectCategory, setSelectCategory] = useState("ALL");

  return (
    <CategoryContext.Provider value={{ selectCategory, setSelectCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
