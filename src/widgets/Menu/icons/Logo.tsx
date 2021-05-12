import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 185 56" {...props}>
      <image width="185" height="56" href={isDark ? '/images/img/LogoDark.png' : '/images/img/LogoWhite.png'}/>
    </Svg>
  )
};

export default Logo;
