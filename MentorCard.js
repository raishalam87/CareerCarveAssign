import React from 'react';
import './MentorCard.css';

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <h3>{mentor.name}</h3>
      <p><strong>Expertise:</strong> {mentor.areas_of_expertise.join(', ')}</p>
      <p><strong>Availability:</strong> {mentor.availability.join(', ')}</p>
      <p><strong>Premium:</strong> {mentor.is_premium ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default MentorCard;
