DROP DATABASE IF EXISTS dealership;

CREATE DATABASE dealership;

INSERT INTO customer (name, phone_number, address, new_customer)
VALUES
    ('Rick James', '951-258-6325', '2504 N Alxander Ave', TRUE),
    ('Mike Jones', '281-384-8004', '234 Houston Dr', TRUE);

INSERT INTO vehicle (make, model, year, mileage, under_warranty,customer_id)
VALUES 
    ('Honda', 'Civic', 2020, 12000, TRUE,1),
    ('Honda', 'Accord', 2015, 57000, FALSE,2);

