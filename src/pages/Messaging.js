import React, { useState } from "react";
import "./Messaging.css";
import { FaSearch, FaRegSmile } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { IoIosMore } from "react-icons/io";

const Messaging = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Message Sent:", message);
      setMessage("");
    }
  };

  return (
    <div className="messaging-container">
      <div className="messaging-header">
        <h2>Messaging</h2>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search messages" />
        </div>
        <IoIosMore className="more-options" />
      </div>
      <div className="messaging-body">
        <div className="message-list">
          <button className="btn">Focused</button>
          <button className="btn">Unread</button>
          <button className="btn">My Connections</button>
          <button className="btn">InMail</button>
          <button className="btn">Starred</button>
          <div className="no-messages">
            <img src="no-messages.png" alt="No messages" />
            <p>No messages yet</p>
            <span>
              Reach out and start a conversation to advance your career...
            </span>
            <button className="send-message-btn">Send a message</button>
          </div>
        </div>
        <div className="message-box">
          <h3>New message</h3>
          <input
            type="text"
            placeholder="Type a name or multiple names"
            className="recipient-input"
          />
          <div className="message-input-box">
            <textarea
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="message-actions">
              <IoMdPhotos className="icon" />
              <GiSelfLove className="icon" />
              <FaRegSmile className="icon" />
              <button
                className="send-btn"
                onClick={handleSend}
                disabled={!message.trim()}
              >
                <BsFillSendFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
