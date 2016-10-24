--- Create table for database
CREATE TABLE favs (
	id SERIAL PRIMARY KEY,
	title varchar(80),
	description text,
	url varchar(300)
	);
