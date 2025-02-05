import React, { useState } from "react";
import "./Jobs.css";
import {
  FaSearch,
  FaBookmark,
  FaFileAlt,
  FaEdit,
  FaBriefcase,
} from "react-icons/fa";

const Jobs = () => {
  const [showPostJobForm, setShowPostJobForm] = useState(false);
  const [showJobList, setShowJobList] = useState(false);

  const jobs = [
    {
      name: "Football Coach",
      description:
        "Looking for an experienced football coach for a youth academy.",
    },
    {
      name: "Sports Analyst",
      description:
        "Analyze game performances and provide insights for a top-tier sports channel.",
    },
    {
      name: "Fitness Trainer",
      description:
        "Join our sports club to train athletes and fitness enthusiasts.",
    },
  ];

  return (
    <div className="job-page">
      <aside className="sidebar">
        <ul>
          <li>
            <FaBookmark className="icon" /> My Jobs
          </li>
          <li>
            <FaFileAlt className="icon" /> Interview Prep
          </li>
        </ul>
        <hr />
        <p className="post-job" onClick={() => setShowPostJobForm(true)}>
          <FaEdit className="icon" /> Post a Free Job
        </p>
      </aside>

      <main className="job-content">
        <div className="search-section">
          <div className="search-bar">
            <FaBriefcase className="search-icon" />
            <input type="text" placeholder="Title, skill, or company" />
          </div>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Location" />
          </div>
        </div>

        {showPostJobForm ? (
          <div className="post-job-form">
            <h3>Post a Sports Job</h3>
            <label>Job Title</label>
            <input type="text" placeholder="Enter job title" />
            <label>Job Description</label>
            <textarea placeholder="Enter job description"></textarea>
            <button className="submit-btn">Submit</button>
            <button
              className="back-btn"
              onClick={() => setShowPostJobForm(false)}
            >
              Back
            </button>
          </div>
        ) : (
          <div className="job-list">
            <h3>More Jobs for You</h3>
            <p>Based on your profile, preferences, and activity.</p>
            <ul>
              {jobs.map((job, index) => (
                <li key={index} className="job-item">
                  <h4>{job.name}</h4>
                  <p>{job.description}</p>
                  <button className="apply-btn">Apply</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default Jobs;
