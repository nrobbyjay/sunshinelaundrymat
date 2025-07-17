import mysql2 from 'mysql2'
export const db = mysql2.createConnection({
        host:'mysql',
        user:'root',
        password:'test123!',
        database:'sunshinelaundry1'
    })
export const initDb = ()=>{
    try{
        db.connect
    }
    
    catch(err){
        console.log('LOOK'+err)
    }
    try{
        const database = `
        CREATE DATABASE IF NOT EXISTS sunshinelaundry1
        `
        const orders = `CREATE TABLE IF NOT EXISTS orders(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(225) NOT NULL,
        email VARCHAR(225) NOT NULL,
        contactNumber VARCHAR(225) NOT NULL,
        includeDetergent BOOL NOT NULL,
        includeFabcon BOOL NOT NULL,
        type VARCHAR(20) NOT NULL,
        deliverAddress VARCHAR(225),
        deliveryDateTime VARCHAR(225),
        pickupDateTime VARCHAR(225),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP

        )`
        db.execute(database)
        db.execute(orders)
    }catch{
        throw(error)
    }
}