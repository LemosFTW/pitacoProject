const db = require('../config/database');

async function initializeDatabase() {
  try {
    // Create appointments table if it doesn't exist
    await db.query(`
      CREATE TABLE IF NOT EXISTS appointments (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        duration INTEGER NOT NULL,
        location VARCHAR(255),
        description TEXT,
        scrum TEXT
      );
    `);
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

module.exports = initializeDatabase; 