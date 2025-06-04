CREATE TABLE appointments (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  duration INTEGER NOT NULL,
  location VARCHAR(255),
  description TEXT
);