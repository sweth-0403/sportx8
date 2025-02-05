import React, { useState } from "react";
import "./Network.css";

export default function NetworksPage() {
  const [following, setFollowing] = useState({});
  const [popupContent, setPopupContent] = useState(null);

  const toggleFollow = (id) => {
    setFollowing((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const showPopup = (title, data) => {
    setPopupContent({ title, data });
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  const sportsEvents = [
    { id: 1, name: "Champions League Final", date: "Saturday, Feb 10" },
    { id: 2, name: "NBA All-Star Game", date: "Sunday, Feb 18" },
    { id: 3, name: "Wimbledon Finals", date: "Sunday, July 14" },
  ];

  const popularProfiles = [
    {
      id: 1,
      name: "Leo Messi",
      role: "Footballer - Inter Miami",
      followers: "12M",
    },
    {
      id: 2,
      name: "Serena Williams",
      role: "Tennis Champion",
      followers: "10M",
    },
    { id: 3, name: "Virat Kohli", role: "Cricketer - India", followers: "15M" },
  ];

  const connections = ["Cristiano Ronaldo", "Michael Phelps", "Usain Bolt"];
  const groups = ["Football Enthusiasts", "Tennis Legends", "Cricket Fan Club"];
  const events = [
    "FIFA World Cup Meetup",
    "Wimbledon Fan Gathering",
    "Super Bowl Party",
  ];

  return (
    <div className="networks-page">
      <aside className="sidebar">
        <button onClick={() => showPopup("Connections", connections)}>
          Connections
        </button>
        <button onClick={() => showPopup("Groups", groups)}>Groups</button>
        <button onClick={() => showPopup("Events", events)}>Events</button>
      </aside>

      <div className="content">
        <div className="invitations-section">
          <h3>Invitations (1)</h3>
          <div className="invitation-card">
            <p>
              <strong>SportX News</strong> invited you to subscribe to{" "}
              <strong>Sports Weekly</strong>
            </p>
            <button className="accept-btn">Accept</button>
            <button className="ignore-btn">Ignore</button>
          </div>
        </div>

        <div className="sports-events-section">
          <h3>Stay in touch through sports events</h3>
          <div className="events-list">
            {sportsEvents.map((event) => (
              <div key={event.id} className="event-card">
                <p>
                  <strong>{event.name}</strong>
                </p>
                <p>{event.date}</p>
                <button className="participate-btn">Participate</button>
              </div>
            ))}
          </div>
        </div>

        <div className="popular-profiles-section">
          <h3>Popular on SportX</h3>
          <div className="profiles-list">
            {popularProfiles.map((profile) => (
              <div key={profile.id} className="profile-card">
                <p>
                  <strong>{profile.name}</strong>
                </p>
                <p>{profile.role}</p>
                <p>{profile.followers} followers</p>
                <button
                  className={
                    following[profile.id] ? "following-btn" : "follow-btn"
                  }
                  onClick={() => toggleFollow(profile.id)}
                >
                  {following[profile.id] ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {popupContent && (
        <div className="popup">
          <div className="popup-content">
            <h3>{popupContent.title}</h3>
            <ul>
              {popupContent.data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
