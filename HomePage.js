import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MentorList from '../components/MentorList';
import BookingForm from '../components/BookingForm';
import './HomePage.css';

const HomePage = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/mentors')
      .then(response => setMentors(response.data))
      .catch(error => console.error('Error fetching mentors', error));
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to Mentor Booking</h1>
      <MentorList mentors={mentors} />
      <BookingForm />
    </div>
  );
};

export default HomePage;
