import React, { useState } from "react";
import "./Skills.css"; // Import your CSS here

const Skills = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    skill: "",
  });
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.skill && !skills.includes(formData.skill)) {
      setSkills([...skills, formData.skill]);
      setFormData({ skill: "" });
    }
    setShowModal(false);
  };

  return (
    <div className="skills">
      <div className="skills-header">
        <h2>Skills</h2>
        <button className="add-skill-btn" onClick={() => setShowModal(true)}>
          Add Skill
        </button>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Skill</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Skill</label>
                <input
                  type="text"
                  name="skill"
                  value={formData.skill}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Save Skill
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

export default Skills;
