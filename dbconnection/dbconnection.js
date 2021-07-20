const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const mysql = require('mysql');

const con = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});
con.connect((error)=>{
    if(error) throw error;
    console.log("Database connected");
});

module.exports = con;