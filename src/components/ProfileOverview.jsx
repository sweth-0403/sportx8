import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileOverview.css";
import CreateEvent from "./CreateEvent"; // Import CreateEvent component

export default function ProfileOverview() {
  const navigate = useNavigate();
  const [showEventModal, setShowEventModal] = useState(false);
  const [showSavedItemsPopup, setShowSavedItemsPopup] = useState(false);

  // Function to handle redirect to Networks Page
  const handleGrowNetworkClick = () => {
    navigate("/Network"); // Redirect to Networks Page
  };

  return (
    <div className="profile-card">
      <div className="profile-banner" onClick={() => navigate("/profile")}>
        <div className="profile-icon">T</div>
      </div>
      <div className="profile-content">
        <h2 className="profile-name">Trending Goku goku</h2>
        <p className="profile-role">Student at ACME Degree College</p>

        <div className="profile-links">
          <p className="link-item">View all analytics</p>
          {/* Added onClick to redirect to Networks Page */}
          <p className="link-item" onClick={handleGrowNetworkClick}>
            Grow your network
          </p>
        </div>

        <div className="premium-section">
          <p>Gain exclusive tools & insights</p>
          <p className="premium-offer">🎖️ Redeem Premium for ₹0</p>
        </div>

        <div
          className="saved-items"
          onClick={() => setShowSavedItemsPopup(true)}
        >
          📌 Saved items
        </div>

        {showSavedItemsPopup && (
          <div className="saved-items-popup">
            <p>No saved items yet</p>
            <button onClick={() => setShowSavedItemsPopup(false)}>Close</button>
          </div>
        )}

        <div className="extras">
          <p className="extra-item">Groups</p>
          <p className="extra-item" onClick={() => setShowEventModal(true)}>
            Events ➕
          </p>
        </div>

        <button className="discover-btn">Discover more</button>
      </div>

      {showEventModal && (
        <CreateEvent onClose={() => setShowEventModal(false)} />
      )}
    </div>
  );
}
