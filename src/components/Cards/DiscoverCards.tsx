import React from "react";
import "./discoverCards.css";

interface DiscoverCardProps {
  imageUrl: string;
  cardText: string;
}

const DiscoverCards: React.FC<DiscoverCardProps> = ({ imageUrl, cardText }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={imageUrl} alt="Card Background" />
      </div>
      <div className="card-content">
        <h5>{cardText}</h5>
      </div>
    </div>
  );
};

export default DiscoverCards;
