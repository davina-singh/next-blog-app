CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category VARCHAR
);

CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    title VARCHAR,
    content TEXT,
    category_id INTEGER REFERENCES categories(category_id)
);

CREATE TABLE comments (
   comment_id SERIAL PRIMARY KEY,
   comment TEXT,
   post_id INTEGER REFERENCES posts(post_id)
);

INSERT INTO categories (category)
VALUES ('Travel'), ('Food'), ('Movies');
