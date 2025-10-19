import express from 'express';
import { GetClientes } from './libs/puxaMensagem.ts';

export const app = express();
const port = 3000

app.use(express.json());

app.get('/', async (req, res) => {
    const users = await GetClientes()
    return res.json(users)
})

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
});