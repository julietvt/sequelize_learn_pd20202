/*ТРАНЗАКЦИИ*/

/*
CREATE SCHEMA sandbox;
*/
/*
CREATE TABLE sandbox.CreditCards(
    id serial PRIMARY KEY,
    number_cc char(16) NOT NULL UNIQUE CHECK(number_cc ~ '^[0-9]{16}$'),
    expire timestamp NOT NULL,
    cvc char(3) NOT NULL CHECK(cvc ~ '^[0-9]{3}$'),
    balance money NOT NULL DEFAULT 0::money
);

INSERT INTO sandbox.CreditCards (number_cc, expire, cvc, balance) VALUES
('1234567890123456', '2023-01-07','123',20000),
('1234567890123458', '2023-02-07','321',500)
RETURNING *;
*/
/*Задача. списать с 1 карточки средства 1000 грн на 2 карту */
BEGIN TRANSACTION;

UPDATE sandbox.CreditCards
SET balance = balance - 1000::money
WHERE id=1;

UPDATE sandbox.CreditCards
SET balance = balance + 1000::money
WHERE id=2;

COMMIT;

