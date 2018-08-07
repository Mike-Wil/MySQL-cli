USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES 
('Protein: 1lb', 'Supplements', 10.00, 80),
('Creatine: 1kg', 'Supplements', 15.00, 120),
('Preworkout', 'Supplements', 20.00, 100),
('Stringer', 'Activewear', 12.00, 40),
('Joggers', 'Activewear', 25.00, 60),
('Nike Romaleos', 'Specialty Shoes', 140.00, 6),
('Dumbbell', 'Sports Equipment', 10.00, 40),
('Barbell', 'Sports Equipment', 450.00, 20),
('Gatorade', 'Drinks', 1.00,1000),
('Gummies', 'Food', 1.00, 1000);

SELECT * FROM products;
