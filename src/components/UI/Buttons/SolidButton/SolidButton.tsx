import React from "react";
import "./SolidButton.scss";

type Props = {
  buttonName: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const SolidButton: React.FC<Props> = ({ onClick, buttonName }) => {
  return (
    <button className="solid-button" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default SolidButton;
