Entities
	-User/profile
	-Category
	-Item
	-Budget Plan
		-holds planned amounts by category/item for a period
	-Period
		-month or year that budget belongs to
	-Transaction Record(optional)

```sql
CREATE TABLE users (
	id SERIAL PRIMARY KEY
	name TEXT NOT NULL,
	email TEXT UNIQUE 
);

CREATE TABLE categories (
	id SERIAL PIRMARY KEY,
	category_id INT REFERENCES categories(id),
	name TEXT NOT NULL 
);

CREATE TABLE items (
	id SERIAL PIRMARY KEY,
	category_id INT REFERENCES categories(id),
	name TEXT NOT NULL
);

CREATE TABLE  budget_plans (
	id SERIAL PRIMARY KEY, 
	user_id INT REFERENCES users(id),
	period_start DATE NOT NULL,  
	period_end DATE NOT NULL,
);

CREATE TABLE transactions (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	item_id INT REFERENCES item(id),
	date DATE NOT NULL,
	amount NUMERIC NOT NULL,
	description TEXT  
);

