import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingForm.css';

const BookingForm = () => {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/mentors')
      .then(response => setMentors(response.data))
      .catch(error => console.error('Error fetching mentors', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/bookings', {
      student_name: studentName,
      mentor_id: selectedMentor,
      session_time: selectedTime,
      status: 'pending'
    })
    .then(response => {
      console.log('Booking created', response.data);
      // Redirect to payment page
    })
    .catch(error => console.error('Error creating booking', error));
  };

  return (
    <div className="booking-form">
      <h2>Book a Session</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Your Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mentor">Select Mentor:</label>
          <select
            id="mentor"
            value={selectedMentor}
            onChange={(e) => setSelectedMentor(e.target.value)}
            required
          >
            <option value="">Select a mentor</option>
            {mentors.map(mentor => (
              <option key={mentor.id} value={mentor.id}>
                {mentor.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sessionTime">Select Time:</label>
          <input
            type="datetime-local"
            id="sessionTime"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
