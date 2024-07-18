import { HeaderContainer } from "@src/components/Common/Header/Header.styled";
import Menus from "@src/components/Common/Header/Menus/Menus";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="container flex justify-between items-center">
        <Link href={"/"} className="text-xl">
          <span className="text-[#22C564]">Cokid</span>
          <span>.Dev.Story</span>
        </Link>
        <Menus />
      </div>
    </HeaderContainer>
  );
}
