import { useState } from "react";
import "./PeopleSuggestions.css";
const SuggestedForYou = () => {
  const [showIndustryInput, setShowIndustryInput] = useState(false);
  const [showSummaryInput, setShowSummaryInput] = useState(false);

  return (
    <div className="suggested-container">
      <h3>Suggested for you</h3>
      <p className="private-text">🔒 Private to you</p>
      <div className="suggested-cards">
        <div className="suggested-card">
          <img src="/industry-icon.png" alt="Industry" className="icon" />
          <h4>Which industry do you work in?</h4>
          <p>
            Members who add an industry receive up to 2.5 times as many profile
            views.
          </p>
          <button onClick={() => setShowIndustryInput(true)}>
            Add industry
          </button>
          {showIndustryInput && (
            <div className="popup">
              <input type="text" placeholder="Enter your industry" />
              <button onClick={() => setShowIndustryInput(false)}>Save</button>
            </div>
          )}
        </div>
        <div className="suggested-card">
          <img src="/summary-icon.png" alt="Summary" className="icon" />
          <h4>
            Write a summary to highlight your personality or work experience
          </h4>
          <p>
            Members who include a summary receive up to 3.9 times as many
            profile views.
          </p>
          <button onClick={() => setShowSummaryInput(true)}>
            Add a summary
          </button>
          {showSummaryInput && (
            <div className="popup">
              <textarea placeholder="Write your summary"></textarea>
              <button onClick={() => setShowSummaryInput(false)}>Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestedForYou;
