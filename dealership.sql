DROP TABLE IF EXISTS customer CASCADE;
DROP TABLE IF EXISTS vehicle CASCADE;

CREATE TABLE customer (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    address TEXT NOT NULL,
    new_customer BOOLEAN NOT NULL
);

CREATE TABLE vehicle (
    id serial PRIMARY KEY,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    mileage INTEGER NOT NULL,
    under_warranty BOOLEAN NOT NULL,
    customer_id INT NOT NULL REFERENCES customer(id) ON DELETE CASCADE
)
