import { Router } from "express";
import { allUsuarios, newUsers } from "../controllers/usuarios.controllers";


const router = Router()

router.get('/all-usuarios', allUsuarios)
router.post('/up-usuario', newUsers)


export default router