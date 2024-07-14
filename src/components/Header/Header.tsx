import {
  HeaderContainer,
  LogoLink,
} from "@src/components/Header/Header.styled";
import Image from "next/image";
import LogoImage from "@public/logo.png";
import Search from "@src/components/Header/Search/Search";
import Menus from "@src/components/Header/Menus/Menus";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="container flex justify-between items-center">
        <LogoLink href={"/"}>
          <Image
            src={LogoImage}
            alt="logo"
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
          />
        </LogoLink>
        <Search />
        <Menus />
      </div>
    </HeaderContainer>
  );
}
