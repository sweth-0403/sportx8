import React, { useState } from "react";
import "./CreateEvent.css";

const CreateEvent = ({ onClose }) => {
  const [eventData, setEventData] = useState({
    coverImage: "",
    eventType: "online",
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    eventDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Data Submitted:", eventData);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="event-modal">
      <div className="event-modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Create an Event</h2>
        <div className="upload-cover">
          <label htmlFor="coverImage">
            <img src="camera-icon.png" alt="Upload" />
            <p>Upload cover image</p>
            <small>Minimum width 480 pixels, 16:9 recommended</small>
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            accept="image/*"
            onChange={(e) =>
              setEventData({ ...eventData, coverImage: e.target.files[0] })
            }
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="event-type">
            <label>
              <input
                type="radio"
                name="eventType"
                value="online"
                checked={eventData.eventType === "online"}
                onChange={handleChange}
              />
              Online
            </label>
            <label>
              <input
                type="radio"
                name="eventType"
                value="in-person"
                onChange={handleChange}
              />
              In Person
            </label>
          </div>
          <input
            type="text"
            name="eventName"
            placeholder="Event name*"
            required
            value={eventData.eventName}
            onChange={handleChange}
          />
          <input
            type="date"
            name="eventDate"
            required
            value={eventData.eventDate}
            onChange={handleChange}
          />
          <input
            type="time"
            name="eventTime"
            required
            value={eventData.eventTime}
            onChange={handleChange}
          />
          {eventData.eventType === "in-person" && (
            <input
              type="text"
              name="eventLocation"
              placeholder="Event location"
              required
              value={eventData.eventLocation}
              onChange={handleChange}
            />
          )}
          <textarea
            name="eventDescription"
            placeholder="Event description"
            rows="3"
            value={eventData.eventDescription}
            onChange={handleChange}
          />
          <button type="submit" className="next-btn">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
