CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  album_id INT NOT NULL,
  user_id INT NOT NULL,
  content VARCHAR(8000) NOT NULL,
  date_created TIMESTAMP NOT NULL,
  FOREIGN KEY (album_id) REFERENCES albums (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);