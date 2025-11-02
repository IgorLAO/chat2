import type { Imessages, MensagemModel, SQLMensagem } from '../../models/messages.ts'
import './style.css'


interface Props {
  message: SQLMensagem[]
}
export default function ContainerChat({ message }: Props) {

  
  return (
    <div className="chat">
      <span className="textos">
        {message?.map((m, i) => (
          <p key={m.PK_ID}>
            <strong>{m.CD_USUARIO}:</strong> {m.DS_MENSAGEM}
          </p>
        ))}
      </span>
    </div>
  )
}
