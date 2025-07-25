import { pool } from "../database.js"


export const allUsuarios = async(req, res) => {
    const result = await pool.query('SELECT * FROM usuarios')
     res.json(result)
}


export const newUsers = async(req, res) => {
    const{nombre, apellido} = req.body
    const result = await pool.query('INSERT INTO usuarios (nombre, apellido) VALUES (?, ?)', [nombre, apellido])
    console.log(result)
}