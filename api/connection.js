const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: process.env.DATABASE,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

connection.query("CREATE TABLE IF NOT EXISTS usuarios (id INT NOT NULL AUTO_INCREMENT, nome VARCHAR(60) NOT NULL, email VARCHAR(60) NOT NULL, senha VARCHAR(80) NOT NULL, role INT DEFAULT 1, can_create INT DEFAULT 4, promove INT DEFAULT 0, aceito-termos BOOLEAN NOT NULL, PRIMARY KEY(id), UNIQUE email (email))  ENGINE=innoDB");
connection.query("CREATE TABLE IF NOT EXISTS relacionamento(id INT NOT NULL AUTO_INCREMENT, user_id INT NOT NULL, admin_id INT NOT NULL, PRIMARY KEY(id)) ENGINE=innoDB")


module.exports = connection;
