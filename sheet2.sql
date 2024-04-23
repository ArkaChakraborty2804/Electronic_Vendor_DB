create database if not exists project;
use project;

create table company(
    CompanyID VARCHAR(6),
    CompanyName VARCHAR(50),
    PRIMARY KEY (CompanyID)
);

create table product(
    ProductID VARCHAR(6),
    CompanyID VARCHAR(6),
    ProductName VARCHAR(50),
    ProductType VARCHAR (50),
    Price NUMERIC(8,2),
    FOREIGN KEY (CompanyID) REFERENCES company(CompanyID),
    PRIMARY KEY (ProductID, CompanyID)
);

create table package(
    PackageID VARCHAR(6),
    ProductID VARCHAR(6),
    PackageName VARCHAR(50),
    PRIMARY KEY (PackageID, ProductID),
    FOREIGN KEY (ProductID) REFERENCES product(ProductID)
);

create table manufacturer(
    ManufacturerID VARCHAR(6),
    ProductID VARCHAR(6),
    ManufacturerName VARCHAR(50),
    PRIMARY KEY (ManufacturerID, ProductID),
    FOREIGN KEY (ProductID) REFERENCES product(ProductID)
);

create table store(
    StoreID VARCHAR(6),
    StoreName VARCHAR(50),
    StoreType VARCHAR(10),
    Address VARCHAR(50),
    PRIMARY KEY (StoreID)
);	

create table storeprod(
    StoreID VARCHAR(6),
    ProductID VARCHAR(6),
    Quantity INT,
    ManufacturerID VARCHAR(6),
    CHECK (Quantity >= 0),
    PRIMARY KEY (StoreID, ProductID),
    FOREIGN KEY (StoreID) REFERENCES store(StoreID),
    FOREIGN KEY (ProductID) REFERENCES manufacturer(ProductID),
    FOREIGN KEY (ManufacturerID) REFERENCES manufacturer(ManufacturerID)
);

create table cart(
    CartID VARCHAR(6),
    StoreID VARCHAR(6),
    ProductID VARCHAR(6),
    Quantity INT,
    PRIMARY KEY (CartID, StoreID, ProductID),
    FOREIGN KEY (StoreID, ProductID) REFERENCES storeprod(StoreID, ProductID)
);

create table customer(
    CustomerID VARCHAR(6),
    Name VARCHAR(50),
    Phone CHAR(10),
    Address VARCHAR(50),
    PRIMARY KEY (CustomerID)
);

create table customerinstance(
    OrderID VARCHAR(6),
    CustomerID VARCHAR(6),
    CartID VARCHAR(6),
    PRIMARY KEY (OrderID),
    FOREIGN KEY (CartID) REFERENCES cart(CartID),
    FOREIGN KEY (CustomerID) REFERENCES customer(CustomerID)
);

create table contract(
    ContractID VARCHAR(6),
    CustomerID VARCHAR(6),
    AccountNumber VARCHAR(10),
    PRIMARY KEY (ContractID),
    FOREIGN KEY (CustomerID) REFERENCES customer(CustomerID)
);

create table carddetails(
    CustomerID VARCHAR(6),
    CardNumber VARCHAR(50),
    PRIMARY KEY (CustomerID, CardNumber),
    FOREIGN KEY (CustomerID) REFERENCES customer(CustomerID)
);

create table booking(
    BookingID VARCHAR(6),
    OrderID VARCHAR(6),
    BookingDate DATE,
    PRIMARY KEY (BookingID),
    FOREIGN KEY (OrderID) REFERENCES customerinstance(OrderID)
);

create table shipping(
    ShippingID VARCHAR(10),
    BookingID VARCHAR(6),
    CompanyName VARCHAR(50),
    Location VARCHAR(50),
    DeliveryDate DATE,
    Deadline DATE,
    PRIMARY KEY (ShippingID),
    FOREIGN KEY (BookingID) REFERENCES booking(BookingID)
);

insert into company values
('C00001', 'Apple'),
('C00002', 'Microsoft'),
('C00003', 'Google'),
('C00004', 'Sony');

select * from company;

INSERT INTO product  VALUES
('P00001', 'C00001', 'iPhone 12', 'Smartphone', 999.99),
('P00002', 'C00001', 'MacBook Pro', 'Laptop', 1499.99),
('P00003', 'C00002', 'Surface Pro 7', 'Tablet', 799.99),
('P00004', 'C00002', 'Xbox Series X', 'Gaming Console', 499.99),
('P00005', 'C00003', 'Pixel 5', 'Smartphone', 699.99),
('P00006', 'C00003', 'Pixelbook Go', 'Laptop', 649.99),
('P00007', 'C00004', 'PlayStation 5', 'Gaming Console', 499.99),
('P00008', 'C00004', 'Sony WH-1000XM4', 'Headphones', 349.99),
('P00009', 'C00004', 'Sony A7 III', 'Camera', 1999.99);

select * from product;

INSERT INTO manufacturer  VALUES
('M00001', 'P00001', 'Apple Inc.'),
('M00002', 'P00002', 'Apple Inc.'),
('M00003', 'P00003', 'Microsoft Corporation'),
('M00004', 'P00004', 'Microsoft Corporation'),
('M00005', 'P00005', 'Google LLC'),
('M00006', 'P00006', 'Google LLC'),
('M00007', 'P00007', 'Sony Corporation'),
('M00008', 'P00008', 'Sony Corporation'),
('M00009', 'P00009', 'Sony Corporation');

select * from manufacturer;

insert into store VALUES
('S00001', 'DigiMart', 'Offline', 'California'),
('S00002', 'DigitalMart', 'Offline', 'Texas'),
('S00003', 'ShopStuff', 'Online', NULL);

select * from store;

INSERT INTO storeprod (StoreID, ProductID, Quantity, ManufacturerID) VALUES
-- Sample data for store S00001 (DigiMart) in California
('S00001', 'P00001', 20, 'M00001'), -- iPhone 12
('S00001', 'P00002', 15, 'M00002'), -- MacBook Pro
('S00001', 'P00003', 25, 'M00003'), -- Surface Pro 7
('S00001', 'P00004', 30, 'M00004'), -- Xbox Series X
('S00001', 'P00005', 10, 'M00005'), -- Pixel 5

-- Sample data for store S00002 (DigitalMart) in Texas
('S00002', 'P00006', 20, 'M00006'), -- Pixelbook Go
('S00002', 'P00007', 18, 'M00007'), -- PlayStation 5
('S00002', 'P00008', 25, 'M00008'), -- Sony WH-1000XM4
('S00002', 'P00009', 12, 'M00009'), -- Sony A7 III

-- Sample data for store S00003 (ShopStuff) online store
('S00003', 'P00001', 5, 'M00001'), -- iPhone 12
('S00003', 'P00002', 3, 'M00002'), -- MacBook Pro
('S00003', 'P00003', 8, 'M00003'), -- Surface Pro 7
('S00003', 'P00007', 6, 'M00007'), -- PlayStation 5
('S00003', 'P00008', 7, 'M00008'); -- Sony WH-1000XM4

select * from storeprod;

INSERT INTO cart (CartID, StoreID, ProductID, Quantity) VALUES
('CRT001', 'S00001', 'P00001', 3),
('CRT001', 'S00001', 'P00002', 1),
('CRT001', 'S00001', 'P00003', 2);

-- Carts for store S00002 (DigitalMart) in Texas
INSERT INTO cart (CartID, StoreID, ProductID, Quantity) VALUES
('CRT002', 'S00002', 'P00006', 1),
('CRT002', 'S00002', 'P00007', 2),
('CRT002', 'S00002', 'P00008', 3);

-- Carts for store S00003 (ShopStuff) online store
INSERT INTO cart (CartID, StoreID, ProductID, Quantity) VALUES
('CRT003', 'S00003', 'P00001', 2),
('CRT003', 'S00003', 'P00007', 1),
('CRT004', 'S00003', 'P00002', 1);

select * from cart;

INSERT INTO customer (CustomerID, Name, Phone, Address) VALUES
('CUS001', 'John Doe', '1234567890', '123 Main St, Anytown, USA'),
('CUS002', 'Jane Smith', '9876543210', '456 Elm St, Othertown, USA'),
('CUS003', 'David Johnson', '5551234567', '789 Oak St, Another Town, USA'),
('CUS004', 'Emily Brown', '9998887777', '101 Pine St, Somewhere, USA'),
('CUS005', 'Michael Wilson', '3334445555', '202 Maple St, Anywhere, USA');

select * from customer;

INSERT INTO contract (ContractID, CustomerID, AccountNumber) VALUES
('CON001', 'CUS001', 'ACCT123456'),
('CON002', 'CUS002', 'ACCT987654');

select * from contract;

INSERT INTO customerinstance VALUES
('ORD001', 'CUS001', 'CRT001'),
('ORD002', 'CUS001', 'CRT004'),
('ORD003', 'CUS002', 'CRT002'),
('ORD004', 'CUS004', 'CRT003');

select * from customerinstance;

INSERT INTO booking VALUES
('B00001', 'ORD001', '2024-04-17'),
('B00002', 'ORD002', '2024-03-12'),
('B00003', 'ORD004', '2024-03-28');

select * from booking;

INSERT INTO shipping VALUES
('123456', 'B00002', 'USPS', 'Strait of Panama', NULL, '2024-05-12'),
('SHIP001', 'B00003', 'UPS', 'Alabama', '2024-04-14', '2024-04-12');

select * from shipping;

-- Q1a
SELECT c.CustomerID, c.Name, c.Phone, c.Address
FROM customer c
INNER JOIN customerinstance ci ON c.CustomerID = ci.CustomerID
INNER JOIN booking b ON ci.OrderID = b.OrderID
INNER JOIN shipping s ON b.BookingID = s.BookingID
WHERE s.ShippingID = '123456' and s.CompanyName = 'USPS';


-- Q1b
SELECT productname, quantity
FROM product AS pd
JOIN cart as ct on pd.productid = ct.productid
JOIN customerinstance as ci on ct.cartid = ci.cartid
JOIN booking AS b ON ci.orderid = b.orderid
JOIN shipping AS s ON b.bookingid = s.bookingid 
WHERE s.shippingid = '123456' AND s.companyname = 'USPS';


-- Q1c
-- Error Code: 1052. Column 'ProductID' in field list is ambiguous
UPDATE storeprod sp
JOIN (
    SELECT sp.StoreID, sp.ProductID, SUM(ct.Quantity) AS TotalQuantity
    FROM storeprod sp
    JOIN cart ct ON sp.StoreID = ct.StoreID AND sp.ProductID = ct.ProductID
    JOIN customerinstance ci ON ct.CartID = ci.CartID
    JOIN booking bo ON ci.OrderID = bo.OrderID
    JOIN shipping sh ON bo.BookingID = sh.BookingID
    WHERE sh.ShippingID = '123456' AND sh.CompanyName = 'USPS'
    GROUP BY sp.StoreID, sp.ProductID
) AS shipped ON sp.StoreID = shipped.StoreID AND sp.ProductID = shipped.ProductID
SET sp.Quantity = sp.Quantity - shipped.TotalQuantity;

select * from storeprod;

INSERT INTO shipping (ShippingID, BookingID, CompanyName, Location, DeliveryDate, Deadline)
SELECT 'SHIP002', BookingID, CompanyName, "Bay Arizona", DeliveryDate, Deadline
FROM shipping
WHERE ShippingID = '123456' AND CompanyName = 'USPS';

select * from shipping;


-- Q2)
SELECT c.CustomerID, c.Name, SUM(p.Price) AS TotalPurchase
FROM customer c
JOIN customerinstance ci ON c.CustomerID = ci.CustomerID
JOIN cart ct ON ci.CartID = ct.CartID
JOIN storeprod sp ON ct.StoreID = sp.StoreID AND ct.ProductID = sp.ProductID
JOIN product p ON sp.ProductID = p.ProductID
JOIN booking b ON ci.OrderID = b.OrderID
WHERE b.BookingDate >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY c.CustomerID
ORDER BY TotalPurchase DESC
LIMIT 1;


-- Q3)
SELECT p.ProductID, p.ProductName, SUM(p.Price * ct.Quantity) AS TotalSalesAmount
FROM product p
JOIN storeprod sp ON p.ProductID = sp.ProductID
JOIN cart ct ON sp.StoreID = ct.StoreID AND sp.ProductID = ct.ProductID
JOIN customerinstance ci ON ct.CartID = ci.CartID
JOIN booking b ON ci.OrderID = b.OrderID
WHERE b.BookingDate >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY p.ProductID, p.ProductName
ORDER BY TotalSalesAmount DESC
LIMIT 2;

-- Q4)
SELECT p.ProductID, p.ProductName, SUM(ct.Quantity) AS TotalUnitSales
FROM product p
JOIN storeprod sp ON p.ProductID = sp.ProductID
JOIN cart ct ON sp.StoreID = ct.StoreID AND sp.ProductID = ct.ProductID
JOIN customerinstance ci ON ct.CartID = ci.CartID
JOIN booking b ON ci.OrderID = b.OrderID
WHERE b.BookingDate >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY p.ProductID, p.ProductName
ORDER BY TotalUnitSales DESC
LIMIT 2;

-- Q5)
SELECT p.ProductID, p.ProductName
FROM product p
WHERE NOT EXISTS (
    SELECT 1
    FROM store s
    LEFT JOIN storeprod sp ON s.StoreID = sp.StoreID AND sp.ProductID = p.ProductID
    WHERE s.Address LIKE '%California%'
    AND sp.Quantity > 0
);

-- Q6)
SELECT bookingid from shipping as s
WHERE s.DeliveryDate > s.Deadline;


-- Q7)Generate the bill for each customer for the past month.
SELECT c.CustomerID, c.Name, SUM(p.Price * ct.Quantity) AS TotalAmount
FROM customer c
JOIN customerinstance ci ON c.CustomerID = ci.CustomerID
JOIN cart ct ON ci.CartID = ct.CartID
JOIN storeprod sp ON ct.StoreID = sp.StoreID AND ct.ProductID = sp.ProductID
JOIN product p ON sp.ProductID = p.ProductID
JOIN booking b ON ci.OrderID = b.OrderID
WHERE b.BookingDate >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
GROUP BY c.CustomerID, c.Name;