import React, { useState } from "react";
import "./SportsCareerOverview.css";

const SportsCareerOverview = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    achievement: "",
    certification: "",
    matchesPlayed: "",
  });
  const [sportsDetails, setSportsDetails] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDetails = {
      achievement: formData.achievement,
      certification: formData.certification,
      matchesPlayed: formData.matchesPlayed,
    };
    setSportsDetails([...sportsDetails, newDetails]);
    setFormData({
      achievement: "",
      certification: "",
      matchesPlayed: "",
    });
    setShowModal(false);
  };

  return (
    <div className="sports-career-overview">
      <div className="header">
        <h2>Sports Career Overview</h2>
        <button className="add-details-btn" onClick={() => setShowModal(true)}>
          Add Details
        </button>
      </div>

      <div className="overview-list">
        {sportsDetails.map((detail, index) => (
          <div key={index} className="overview-item">
            <h3>Achievement: {detail.achievement}</h3>
            <p>Certification: {detail.certification}</p>
            <p>Matches Played: {detail.matchesPlayed}</p>
          </div>
        ))}
      </div>

      {/* Modal for Adding Details */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Sports Career Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Achievement</label>
                <input
                  type="text"
                  name="achievement"
                  value={formData.achievement}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Certification</label>
                <input
                  type="text"
                  name="certification"
                  value={formData.certification}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Matches Played</label>
                <input
                  type="text"
                  name="matchesPlayed"
                  value={formData.matchesPlayed}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Save Details
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsCareerOverview;
