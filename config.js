require("dotenv").config()

//import library mysql
const mysql = require("mysql") 

const requiredDatabasePassword = process.env.DB_PASSWORD
if (!requiredDatabasePassword) {
    throw new Error("DB_PASSWORD is not configured. Add it to the backend .env file.")
}

//inisialisasi database yang digunakan
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: requiredDatabasePassword,
    database: process.env.DB_NAME || "moklet_rest_api"
})

//lakukan koneksi database
db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})

//export konfigurasi database
module.exports = db