// seed data commands

INSERT INTO users (first_name, last_name, email)
VALUES
  ('Alice', 'Johnson', 'alice@example.com'),
  ('Bob', 'Smith', 'bob@example.com'),
  ('Charlie', 'Brown', 'charlie@example.com');

INSERT INTO categories (parent_id, name)
VALUES
  (NULL, 'Housing'),
  (NULL, 'Food'),
  (NULL, 'Transportation'),
  (2, 'Groceries'),       -- child of Food
  (2, 'Restaurants'),     -- child of Food
  (3, 'Gas'),             -- child of Transportation
  (3, 'Public Transit');  -- child of Transportation

INSERT INTO items (category_id, name)
VALUES
  (1, 'Rent'),
  (4, 'Vegetables'),
  (4, 'Meat'),
  (5, 'Takeout'),
  (6, 'Gasoline'),
  (7, 'Metro Pass');

INSERT INTO budget_plans (user_id, period_start, period_end)
VALUES
  (1, '2025-10-01', '2025-10-31'),
  (2, '2025-10-01', '2025-10-31'),
  (3, '2025-10-01', '2025-10-31');

INSERT INTO transactions (user_id, item_id, date, amount, description)
VALUES
  (1, 1, '2025-10-01', 1200.00, 'Monthly rent'),
  (1, 2, '2025-10-02', 45.50, 'Bought vegetables'),
  (1, 4, '2025-10-03', 28.00, 'Takeout dinner'),
  (2, 5, '2025-10-01', 60.00, 'Gas refill'),
  (2, 6, '2025-10-02', 30.00, 'October metro pass'),
  (3, 3, '2025-10-02', 75.25, 'Weekly meat purchase');
