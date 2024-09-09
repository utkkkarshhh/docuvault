import React from "react";
import { MdEmail } from "react-icons/md";
import "./Footer.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="footer-text">
        <p>
          Designed & Developed by{" "}
          <a href="https://www.linkedin.com/in/utkkkarshhh">Utkarsh</a> and{" "}
          <a href="https://www.linkedin.com/in/tanish-baidya/">Tanish</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
