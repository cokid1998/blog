"use client";
import { SideBarContainer } from "@src/components/Sidebar/Sidebar.styled";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/edit" ? null : (
        <SideBarContainer>
          <ul>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
          </ul>
        </SideBarContainer>
      )}
    </>
  );
};

export default Sidebar;
