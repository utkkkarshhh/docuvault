import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import SolidButton from "@/components/UI/Buttons/SolidButton/SolidButton";
import AvatarButton from "@/components/UI/Buttons/AvatarButton/AvatarButton";

type Props = {
};

const Navbar = (props: Props) => {
  const isLoggedIn: boolean = false;

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDevelopers = () => {
    const developersSection = document.getElementById("developers");
    if (developersSection) {
      developersSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-icon">
        <p className="navbar-icon-text">
          <Link to="/">DocuVault</Link>
        </p>
      </div>
      {isLoggedIn ? (
        <div className="navbar-buttons">
          <p className="navbar-item" onClick={scrollToFeatures}>
            GitHub
          </p>

          <AvatarButton name="Utkarsh" />
        </div>
      ) : (
        <div className="navbar-buttons">
          <p className="navbar-item" onClick={scrollToFeatures}>
            Features
          </p>
          <p className="navbar-item" onClick={scrollToDevelopers}>
            Developers
          </p>

          <SolidButton
            onClick={() => {
              console.log("Login/ Register");
            }}
            buttonName={"Get Started"}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
