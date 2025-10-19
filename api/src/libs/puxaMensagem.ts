import { Select } from "./mysql.ts"

export async function GetClientes(){
    const res = await Select('TB_USUARIOS', '*')
    return res
}