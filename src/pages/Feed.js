import React, { useState } from "react";
import "./Feed.css";

const postsData = [
  {
    id: 1,
    profile: "Sports News",
    followers: "2,500,000",
    time: "2h",
    content:
      "Breaking: Manchester United secures a thrilling last-minute victory against Chelsea! ⚽🔥",
    image: "https://source.unsplash.com/600x300/?football",
    likes: 120,
    dislikes: 10,
    comments: [],
  },
  {
    id: 2,
    profile: "Cricket Insider",
    followers: "1,800,000",
    time: "5h",
    content:
      "Virat Kohli scores another century in a stunning chase against Australia! 🏏💯",
    image: "https://source.unsplash.com/600x300/?cricket",
    likes: 95,
    dislikes: 5,
    comments: [],
  },
  {
    id: 3,
    profile: "NBA Updates",
    followers: "3,200,000",
    time: "1d",
    content:
      "LeBron James dominates the game with a triple-double performance! 🏀🔥",
    image: "https://source.unsplash.com/600x300/?basketball",
    likes: 150,
    dislikes: 8,
    comments: [],
  },
];

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
      setShowCommentBox(false);
    }
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="profile-icon">{post.profile.charAt(0)}</div>
        <div>
          <strong>{post.profile}</strong>
          <p>
            {post.followers} followers • {post.time}
          </p>
        </div>
      </div>
      <p className="post-content">{post.content}</p>
      <img src={post.image} alt="Post" className="post-image" />
      <div className="post-actions">
        <button className="like-btn" onClick={handleLike}>
          👍 {likes}
        </button>
        <button className="dislike-btn" onClick={handleDislike}>
          👎 {dislikes}
        </button>
        <button className="comment-btn" onClick={() => setShowCommentBox(true)}>
          💬 {comments.length} Comments
        </button>
        <button className="share-btn">🔄 Share</button>
      </div>
      {showCommentBox && (
        <div className="comment-box">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button onClick={handleCommentSubmit}>Post</button>
        </div>
      )}
      {comments.length > 0 && (
        <div className="comments-section">
          {comments.map((cmt, index) => (
            <p key={index} className="comment">
              🗨️ {cmt}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const Feed = () => {
  return (
    <div className="feed-container">
      {postsData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
