const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/database');
const { v4: uuidv4 } = require('uuid');
const initializeDatabase = require('./database/init');

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/appointments', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM appointments');
    res.json({ 
      message: 'Appointments fetched successfully', 
      appointments: result.rows 
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

app.post('/appointments', async (req, res) => {
  const { name, date, time, duration, location, description } = req.body;
  const id = uuidv4();
  if (!name || !date || !time || !duration || !location || !description) 
    return res.status(400).json({ message: 'Missing required fields' });
  
  const scrum = "TODO";
  try {
    const result = await db.query(
      'INSERT INTO appointments (id, name, date, time, duration, location, description, scrum) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [id, name, date, time, duration, location, description,scrum]
    );
    
    res.status(201).json({ 
      message: 'Appointment created successfully',
      appointment: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Error creating appointment' });
  }
});

app.delete('/appointments/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) 
    return res.status(400).json({ message: 'Missing required fields' });
  try {
    await db.query('DELETE FROM appointments WHERE id = $1', [id]);
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ message: 'Error deleting appointment' });
  }
});

app.patch('/appointments/:id', async (req, res) => {
  const { column } = req.body;
  const {id} = req.params;
  if (!id)
    return res.status(400).json({ message: 'Missing appointment ID' });

  if (!column)
    return res.status(400).json({ message: 'Missing required fields' });

  try{
    await db.query(
      `UPDATE appointments SET scrum = $1 WHERE id = $2`,
      [column, id]
    );
    res.json({ message: 'Appointment updated successfully' });

  }catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({ message: 'Error updating appointment' });
  }

})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Initialize database and start server
async function startServer() {
  try {
    await initializeDatabase();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer(); 