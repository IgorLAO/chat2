export interface Imessages {
  message: {
    dataHora?: string
    msg: string
    idUser?: number
    cd_usuario?: string
    pk_id: number
  }[]

  color?: string
}


export interface MensagemModel {
    dataHora: string
    msg: string
    idUser?: number
    cd_usuario?: string
}


export interface SQLMensagem {
  PK_ID: number
  FK_USUARIO: number
  DS_MENSAGEM: string
  dataenvio?: string
  CD_USUARIO: string
}