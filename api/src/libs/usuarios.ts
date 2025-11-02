import { Select } from "../plata/mysql.ts"
import { RetError } from "../plata/tools/TratamentoErro.ts"

export async function GetClientes() {
    const r = await Select('TB_USUARIOS', '*')
    if (r.error?.erro !== undefined) {
        return RetError({
            ErrorID: 'BLINSMSG',
            erro: r
        })
    }

    return r.values
}