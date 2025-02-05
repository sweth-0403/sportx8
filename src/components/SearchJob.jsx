import React from "react";
import "./SearchJob.css";

const SearchJob = () => {
  return (
    <div className="search-job-container">
      <div className="search-header">
        <input
          type="text"
          placeholder="Title, skill or company"
          className="search-input"
        />
        <input type="text" placeholder="India" className="location-input" />
        <button className="search-button">Search</button>
      </div>
      <div className="filter-section">
        <button className="filter-button">
          Jobs <span>▼</span>
        </button>
        <button className="filter-button">
          Date posted <span>▼</span>
        </button>
        <button className="filter-button">
          Experience level <span>▼</span>
        </button>
        <button className="filter-button">
          Company <span>▼</span>
        </button>
        <button className="filter-button">
          Remote <span>▼</span>
        </button>
        <button className="filter-button">Easy Apply</button>
        <button className="filter-button">All filters</button>
      </div>
      <div className="job-results">
        <div className="job-listing">
          <h3>BPO Jobs for Freshers (Voice & Chat) Home-Based</h3>
          <p>Tenstoten Services - New Delhi, Delhi, India (Remote)</p>
          <span>Viewed</span>
        </div>
        <div className="job-listing">
          <h3>Project Manager</h3>
          <p>YES BANK - Mumbai Metropolitan Region (On-site)</p>
          <span>Promoted - Easy Apply</span>
        </div>
        <div className="job-listing">
          <h3>Remote Freelancer Travel Consultant</h3>
          <p>Dreamport - India (Remote)</p>
          <span>Response time is typically 1 day</span>
        </div>
        <div className="job-listing">
          <h3>Home Based work ( Data Entry executive ) apply now</h3>
          <p>VISHWANATH ENTERPRISES - Chandigarh, Chandigarh, India (Remote)</p>
          <span>23 hours ago</span>
        </div>
      </div>
    </div>
  );
};

export default SearchJob;
