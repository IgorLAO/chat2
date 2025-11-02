import { app } from "../index.ts"
import { GetClientes } from "../libs/usuarios.ts"


app.get('/users', async (req, res) => {
    const users = await GetClientes()
    return res.json(users)
})