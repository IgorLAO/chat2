import express from 'express';
import cors from 'cors'
import { GetClientes } from './libs/usuarios.ts';
import { GetMSG, InsertMSG } from './libs/msg.ts';
import type { MensagemModel } from './models/usuarios.ts';

export const app = express();
const port = 3000

app.use(express.json());
app.use(cors())

app.get('/users', async (req, res) => {
    const users = await GetClientes()
    return res.json(users)
})


app.get('/consultarmsg', async (req, res) => {
    const users = await GetMSG()
    return res.json(users)
})


app.post('/enviarMsg', async (req, res) => {
    const valid = req.body as MensagemModel

    const msg = await InsertMSG({
        msg: valid.msg ?? '',
        cd_usuario: valid.cd_usuario ?? '',
        idUser: valid.idUser ?? 0,
        dataHora: ''
    })

    res.json({msg})
})

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
});