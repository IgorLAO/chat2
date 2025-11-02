import type { AxiosResponse } from "axios";
import type { Imessages, MensagemModel, SQLMensagem } from "../models/messages.ts";
import { api } from "./request.ts";

export async function GetConversa(): Promise<SQLMensagem> {
    const r = await api.get('consultarmsg')
        .then((e) => e)
    const data = r.data as SQLMensagem

    return data
}


export async function EnviaMsg(msg: Imessages) {
    const r = await api.post<AuthenticatorResponse, AxiosResponse, MensagemModel>('enviarMsg', {
    
        dataHora: msg.message[0].dataHora ?? '',
        msg: msg.message[0].msg,
        idUser: msg.message[0].idUser,
        cd_usuario: msg.message[0].cd_usuario
    })

    return r
}

