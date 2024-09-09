import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./AvatarButton.scss";
import Avatar from "../../../../assets/images/avatar-generations_prsz.jpg";

type Props = {
  name: string;
};

const AvatarButton = (props: Props) => {
  return (
    <div className="avatar-button">
      <div className="avatar-image">
        <img src={Avatar} alt="Avatar" />
      </div>
      <div className="avatar-text">
        <p>{props.name}</p>
      </div>
      <div className="avatar-arrow">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default AvatarButton;
