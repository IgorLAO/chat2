import './App.css'
import ContainerChat from '../components/containerChat/index.tsx'
import { useEffect, useState } from 'react'
import { EnviaMsg, GetConversa } from '../services/messages.ts'
import type { Imessages } from '../models/messages.ts'

function App() {
  const [msg, setMSg] = useState('')
  const [user, setUser] = useState('')
  const [todas, SetTodasMsgs] = useState<any>()

  async function Guarda(NovaMsg: string) {
    await EnviaMsg({
      message: [{
        msg: NovaMsg,
        dataHora: '',
        cd_usuario: user,
        pk_id: 0
      }]
    })
  
    SetTodasMsgs('')
  }

  async function Mostra() {
    let t = await GetConversa()
    SetTodasMsgs(t)
  }

  useEffect(() => {
    const timer =  setInterval(async () =>{
      Mostra()
    }, 4000)
    return () => clearInterval(timer)
  },[])

  return (
    <>
      <div className='nome'>
        <p >Nome do seu usario
          <input value={user} type="text" className='inputnome' onChange={(e) => {setUser(e.target.value)}}/>
        </p>
      </div>
      <div className='container'>

        <div>
          <ContainerChat message={todas} />
        </div>
        <div className='Caixatexto'>
          <input value={msg} onChange={(e) => setMSg(e.target.value)} type="text" className='inputText' />
          <button onClick={() => Guarda(msg)} className='Botao enviar'>Enviar</button>
          <button onClick={() => Mostra()} className='Refresh'>Refresh</button>
        </div>
      </div>
    </>
  )
}

export default App
