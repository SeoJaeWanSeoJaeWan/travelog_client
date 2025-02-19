import LogoStyle from "./logo.style";
import logo from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <h1>
      <LogoStyle.Logo src={logo} alt="Travelog"></LogoStyle.Logo>
    </h1>
  );
};

export default Logo;
