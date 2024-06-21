CREATE TABLE bidders (
  id serial PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE items (
  id serial PRIMARY KEY,
  name text NOT NULL,
  initial_price numeric(6,2) NOT NULL CHECK (initial_price BETWEEN 0.01 AND 1000.00),
  sales_price numeric(6,2) CHECK (sales_price BETWEEN 0.01 AND 1000.00)
);

CREATE TABLE bids (
  id serial PRIMARY KEY,
  bidder_id integer NOT NULL REFERENCES bidders(id) ON DELETE CASCADE,
  item_id integer NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  amount numeric(6,2) NOT NULL CHECK (amount BETWEEN 0.01 AND 1000.00)
);


SELECT name AS "Bid on Items" FROM items WHERE id IN
(SELECT DISTINCT item_id FROM bids); -- runs faster with DISTINCT

SELECT name AS "Not Bid On" FROM items WHERE id NOT IN
(SELECT DISTINCT item_id FROM bids);

SELECT max(arbitrary_table_name.count) AS "Highest # of Bids" FROM
(SELECT count(bidder_id) FROM bids
GROUP BY bidder_id) AS arbitrary_table_name;

SELECT items.name,
      (SELECT count(item_id) FROM bids WHERE item_id = items.id)
FROM items;
