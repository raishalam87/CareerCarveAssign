import React from 'react';
import MentorCard from './MentorCard';
import './MentorList.css';

const MentorList = ({ mentors }) => {
  return (
    <div className="mentor-list">
      {mentors.map(mentor => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorList;
