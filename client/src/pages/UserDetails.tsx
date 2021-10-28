import { useEffect, useState } from 'react'
import UserForm from '../components/UserForm'

export default function UserDetails() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const [, userId] = window.location.pathname.split('/user/')
    
  }, [])

  return (
    <section>
      <h2>Bem-vindo(a) à página de detalhes do usuário!</h2>

      <UserForm update />
    </section>
  )
}
