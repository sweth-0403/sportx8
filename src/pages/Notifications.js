import React from "react";
import ProfileOverview from "/src/components/ProfileOverview.jsx";
import Footer from "./Footer";
import "./Notifications.css";

const Notifications = () => {
  return (
    <div className="notifications-container">
      <div className="notifications-left">
        <ProfileOverview />
        <div className="manage-notifications">
          <h3>Manage your Notifications</h3>
          <a href="#" className="view-settings">
            View Settings
          </a>
        </div>
      </div>
      <div className="notifications-center">
        <div className="notifications-header">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Jobs</button>
          <button className="filter-btn">My posts</button>
          <button className="filter-btn">Mentions</button>
        </div>
        <div className="notifications-content">
          <img
            src="/assets/no-notifications.png"
            alt="No Notifications"
            className="no-notifications-img"
          />
          <h2>No new notifications</h2>
          <p>View other updates at your Home</p>
          <button className="go-home-btn">Go to Home</button>
        </div>
      </div>
      <div className="notifications-right">
        <Footer />
      </div>
    </div>
  );
};

export default Notifications;
