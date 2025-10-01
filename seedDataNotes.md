// seed data commands

INSERT INTO locations (locationName, barcode, locationRow, locationColumn, description)
VALUES ('G12', '3408-9923', 34, 12, '');

INSERT INTO users (first_name, last_name, email, created_at, updated_at)
VALUES ('James', 'Harden', 'dribbletoomuch@beard.com', NOW(), NOW() + Interval '3 days');

INSERT INTO users (first_name, last_name, email, created_at, updated_at)
VALUES ('Derrick', 'Rose', 'mvp@thebest.com', NOW(), NOW() + Interval '3 days');

INSERT INTO users (first_name, last_name, email, created_at, updated_at)
VALUES ('Joakim', 'Noah', 'defense@mvp.com', NOW(), NOW() + Interval '3 days');

