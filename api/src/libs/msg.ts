import type { PlataError } from "../plata/types/typesPlata.ts";
import type { MensagemModel, SQLMensagemModel } from "../models/usuarios.ts";
import { Insert, Select } from "../plata/mysql.ts";
import { RetError } from "../plata/tools/TratamentoErro.ts";

export async function InsertMSG(msg: MensagemModel): Promise<MensagemModel | PlataError | SQLMensagemModel> {
    const r = await Insert<SQLMensagemModel>('TB_MENSAGENS', 'DS_MENSAGEM,FK_USUARIO,dataenvio,cd_usuario',
        `'${msg.msg}', ${msg.idUser}, now(), '${msg.cd_usuario}'`
    )

    if (r.error?.erro !== undefined) {
        return RetError({
            ErrorID: 'BLINSMSG',
            erro: r
        })
    }
    
    if (r.values === undefined){
        return RetError({
            ErrorID: 'BLSELECTMSG001',
            erro: r
        })
    }

    return r.values
}

export async function GetMSG(idUser?: number): Promise<MensagemModel | SQLMensagemModel | PlataError> {
    const res = await Select<SQLMensagemModel>(
        `TB_MENSAGENS`,
        '*',
        undefined,
        undefined,
        'PK_ID'
    )
    
    if (res.error?.ErrorID !== undefined) {
        return RetError({
            ErrorID: 'BLSELECTMSG001',
            erro: res
        })
    }
    const sel = res.values;
    
    if (res.values === undefined){
        return RetError({
            ErrorID: 'BLSELECTMSG001',
            erro: res
        })
    }
    
    return res.values
}