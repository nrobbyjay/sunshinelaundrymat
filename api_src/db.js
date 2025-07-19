import mysql2 from 'mysql2'
export const con = () => {
    return mysql2.createConnection({
        host: 'mysql',
        user: 'root',
        password: 'test123!',
        database: 'sunshinelaundry1'
    })
}