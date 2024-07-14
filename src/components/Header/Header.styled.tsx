import Link from "next/link";
import tw from "tailwind-styled-components";

export const HeaderContainer = tw.header`
  sticky
  top-0
  backdrop-blur
  border-b
  py-3
  flex
  items-center
  justify-center
`;

export const LogoLink = tw(Link)`
  text-5xl
`;
