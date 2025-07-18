import mysql2 from 'mysql2'
export let db
const dbInit = mysql2.createConnection({
        host:'mysql',
        user:'root',
        password:'test123!',
    })
export const initDb = ()=>{
    dbInit.connect((err)=>{
      if(err){
        throw err
      }
    try{
        const database = `
        CREATE DATABASE IF NOT EXISTS sunshinelaundry1`
        dbInit.query(database)
        db = mysql2.createConnection({
            host:'mysql',
            user:'root',
            password:'test123!',
            database:'sunshinelaundry1'        
        })
        const orders = `CREATE TABLE IF NOT EXISTS orders(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(225) NOT NULL,
        email VARCHAR(225) NOT NULL,
        contactNumber VARCHAR(225) NOT NULL,
        includeDetergent BOOL NOT NULL,
        includeFabcon BOOL NOT NULL,
        type VARCHAR(20) NOT NULL,
        deliverAddress VARCHAR(225),
        deliverDateTime VARCHAR(225),
        pickupDateTime VARCHAR(225),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP

        )`
        db.execute(orders)

        
    }catch(err){
        console.log('Unable to create database')
        throw err
    }
      return
    })
}