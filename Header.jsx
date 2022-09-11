import React from "react";
import Img from "./Img";
import Location from "./location";
import Searchitem from "./searchItem";
import Signin_up from "./SignIn_up";
import Create from "./create";

function Header() {
  return <div className="header_img">
    <Img />
    <Location />
    <Searchitem />
    <Signin_up />
    <Create />
  </div>;
}

export default Header;
