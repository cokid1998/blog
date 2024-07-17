import Image from "next/image";
import {
  HeaderContainer,
  LogoLink,
} from "@src/components/Common/Header/Header.styled";
import Search from "@src/components/Common/Header/Search/Search";
import Menus from "@src/components/Common/Header/Menus/Menus";
import LogoImage from "@public/logo.png";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="container flex justify-between items-center">
        <LogoLink href={"/"}>
          <Image src={LogoImage} alt="logo" width={70} height={70} />
        </LogoLink>
        <Search />
        <Menus />
      </div>
    </HeaderContainer>
  );
}
