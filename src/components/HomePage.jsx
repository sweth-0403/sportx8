import React from "react";
import ProfileOverview from "./ProfileOverview";
import CreatePost from "./CreatePost";
import Feed from "../pages/Feed";
import "./HomePage.css";
import Footer from "../pages/Footer";

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <ProfileOverview />
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <CreatePost />
        <Feed />
      </div>

      {/* Right Sidebar (Empty for now) */}
      <div className="right-sidebar">
        <Footer/>
      </div>
    </div>
  );
}
