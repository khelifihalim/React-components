import React from "react";
import FullName from "./FullName";
import ProfilePhoto from "./ProfilePhoto";

const Header = () => {
  return (
    <div className="container text-center">
  <div className="row">
    <div className="col"><ProfilePhoto/></div>
    <div className="col"><FullName/></div>
  </div>
</div>   
    
  )
}
export default Header;
