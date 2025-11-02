export interface MensagemModel {
    dataHora: string
    msg: string
    idUser?: number
    cd_usuario?: string
    pk_id?: number
}

export interface SQLMensagemModel {
  PK_ID: number
  FK_USUARIO: number | null
  DS_MENSAGEM: string
  CD_USUARIO?: string | null
  dataenvio?: string
}