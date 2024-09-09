import React from "react";
import "./WhiteButton.scss";

type Props = {
  buttonName: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const WhiteButton: React.FC<Props> = ({ onClick, buttonName }) => {
  return (
    <button className="white-button" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default WhiteButton;
