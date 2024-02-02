import React, { useState } from "react";
import { images } from "../../constants";
import "./feedback.css";

const profilesData = [
  {
    id: 1,
    name: "G. Zirkle",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et amet ipsum repellendus nemo consequatur suscipit, adipisci provident, ex eaque pariatur temporibus accusamus eveniet ad nostrum aperiam odit?",
  },
  {
    id: 2,
    name: "H. Wang",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et amet ipsum repellendus nemo consequatur suscipit molestias dignissimos laudantium, pariatur temporibus accusamus eveniet ad nostrum aperiam odit?",
  },
  {
    id: 3,
    name: "David Lee",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur suscipit molestias dignissimos laudantium, adipisci provident, ex eaque pariatur temporibus accusamus eveniet ad nostrum aperiam odit?",
  },
  {
    id: 4,
    name: "R. Lilly",
    feedback:
      "Lorem ipsum dolor sit amet. Et amet ipsum repellendus nemo consequatur suscipit molestias dignissimos laudantium, adipisci provident, ex eaque pariatur temporibus accusamus eveniet ad nostrum aperiam odit?",
  },
  {
    id: 5,
    name: "Jane Smith",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et amet ipsum repellendus nemo consequatur suscipit molestias dignissimos laudantium, adipisci provident, ex eaque pariatur temporibus accusamus ",
  },
  {
    id: 6,
    name: "S. Smith",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et amet ipsum repellendus nemo consequatur suscipit molestias dignissimos laudantium, adipisci provident, ex eaque pariatur temporibus accusamus eveniet ad nostrum aperiam odit?",
  },
];

const Feedback = () => {
  const [selectedProfile, setSelectedProfile] = useState(0);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="feedback">
      <div className="container">
        <h1>Why Choose Us</h1>
        <span>
          <img src={images.underline} alt="" />
        </span>
        <p id="p_content">
          Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut
          labore
        </p>
        <p>etesde dolore magna aliquapspendisse and the gravida.</p>

        <div className="gallery_container">
          <div className="profile-gallery-container">
            <div className="profiles-list">
              {profilesData.map((profile) => (
                <div
                  key={profile.id}
                  className={`profile-item ${
                    selectedProfile === profile ? "selected" : ""
                  }`}
                  onClick={() => handleProfileClick(profile)}
                >
                  <img
                    src={images.profile}
                    alt={profile.name}
                    className="profile-photo"
                  />
                </div>
              ))}
            </div>
            <div className="feedback-info">
              <div className="wrap_up">
                <p>{selectedProfile.feedback}</p>
                <h2>{selectedProfile.name} <span>- Astrologer</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
