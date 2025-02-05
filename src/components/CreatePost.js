import React, { useState } from "react";
import "/src/components/CreatePost.css";
const PostComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleFileUpload = (event) => {
    console.log("File selected:", event.target.files[0]);
  };

  return (
    <div className="post-container">
      <div className="post-box" onClick={openModal}>
        <div className="avatar">T</div>
        <input
          type="text"
          placeholder="Start a post, try writing with AI"
          readOnly
        />
      </div>
      <div className="post-actions">
        <label>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <button className="photo-btn">📷 Photo</button>
        </label>
        <label>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <button className="video-btn">🎥 Video</button>
        </label>
        <button className="article-btn" onClick={openModal}>
          📝 Write article
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="avatar">T</span>
              <span>Trending Goku goku ▼</span>
              <button className="close-btn" onClick={closeModal}>
                ✖
              </button>
            </div>
            <textarea
              placeholder="What do you want to talk about?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <div className="modal-actions">
              <button className="emoji-btn">😊</button>
              <button className="media-btn">📷</button>
              <button className="calendar-btn">📅</button>
              <button className="more-btn">➕</button>
            </div>
            <button className="post-btn" disabled={!postContent.trim()}>
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostComponent;
