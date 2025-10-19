import { app } from "../index.ts";
import { GetClientes } from "../libs/puxaMensagem.ts";


app.get('/enviar', async (req, res) => {
    const users = await GetClientes()
    return res.json(users)
})