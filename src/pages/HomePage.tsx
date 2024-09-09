import React from "react";
import "./HomePage.scss";

export default function HomePage() {
  const userName = "Tanish";
  return (
    <div className="homepage">
      <div className="homepage-head">
        <p>Hi {userName}, Welcome back!</p>
      </div>
      <div className="document-upload-area">
        <div className="document-upload-area-input">
          <input type="file" id="fileInput" accept="image/*"></input>
        </div>
        <div className="document-upload-area-form"></div>
      </div>
    </div>
  );
}
