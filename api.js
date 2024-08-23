// Get all mentors
app.get('/mentors', (req, res) => {
    db.all('SELECT * FROM mentors', [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  });
  
  // Create a booking
  app.post('/bookings', (req, res) => {
    const { student_id, mentor_id, session_time, status } = req.body;
    db.run('INSERT INTO bookings (student_id, mentor_id, session_time, status) VALUES (?, ?, ?, ?)', 
      [student_id, mentor_id, session_time, status], function(err) {
        if (err) {
          return console.log(err.message);
        }
        res.json({ id: this.lastID });
      });
  });
  
  // Retrieve bookings
  app.get('/bookings', (req, res) => {
    const { student_id, mentor_id } = req.query;
    let query = 'SELECT * FROM bookings WHERE 1=1';
    const params = [];
    if (student_id) {
      query += ' AND student_id = ?';
      params.push(student_id);
    }
    if (mentor_id) {
      query += ' AND mentor_id = ?';
      params.push(mentor_id);
    }
    db.all(query, params, (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  });
  