import React from "react";

// Styles
import { FooterMobileStyled } from "./styles";

import { useSelector } from "react-redux";
import Link from "next/link";
import { IconButton } from "../IconButton";
import { StyledBottomIndicator } from "../Layout/components";
import { Product } from "@/types";
import { RootState } from "@/store";
import { Loading } from "@nextui-org/react";

interface IFooterMobileProps {
  username: string;
  isDark: boolean;
  toggleDark: () => void;
  onLogin: () => void;
  onUserAcaunt: () => void;
}

const FooterMobile = ({
  username,
  isDark,
  toggleDark,
  onLogin,
  onUserAcaunt,
}: IFooterMobileProps) => {
  const dataAbout: any = useSelector((state: RootState) => {
    const res = state.about.about.flat() ?? null;
    return res.flat();
  });
  if (dataAbout.length === 0) {
    return (
      <div>
        <Loading size="lg" />
      </div>
    );
  }
  return (
    <FooterMobileStyled>
      <IconButton
        name={username ? "User" : "Login"}
        size={1.5}
        onClick={username ? onUserAcaunt : onLogin}
      />

      <div className="isDark">
        <IconButton
          name={!isDark ? "Moon" : "Sun"}
          size={1.5}
          onClick={() => toggleDark()}
        />
      </div>
      <Link href={"/about"} passHref legacyBehavior className="aboutButton">
        <IconButton name={"Message"} size={1.5} />
      </Link>
      <a
        href={`tel:${dataAbout[0]?.attributes?.phone1}`}
        className="poneWrapper"
      >
        <div className="gepTelephone"></div>
        <IconButton
          name={"Phone2"}
          size={1.5}
          onClick={() => console.log("onPressPhone")}
        />
      </a>
      <Link href={"/"} passHref legacyBehavior>
        <IconButton name={"Home"} size={1.5} />
      </Link>
    </FooterMobileStyled>
  );
};
export default FooterMobile;
