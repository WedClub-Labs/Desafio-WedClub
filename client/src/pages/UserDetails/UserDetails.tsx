import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard'
import UserForm from '../../components/UserForm/UserForm'
import { deleteUser, getUserById } from '../../services/api'
import { objError } from '../../utils/errors'

import './UserDetails.css'

export default function UserDetails() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [id, setId] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  useEffect(() => {
    const [, userId] = window.location.pathname.split('/user/')
    setId(userId)

    const getUser = async (userId: string) => {
      try {
        const user = await getUserById(userId)
        const { userName, email, image } = user

        setUserName(userName)
        setEmail(email)
        setImage(image)
      } catch (err: any) {
        // console.log(err.message)
        setErrorMsg(objError['Internal Server Error'])
        return setTimeout(() => setErrorMsg(''), 2000)
      }
    }

    getUser(userId)
  }, [])

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id)

      setRedirect(true)
      return setTimeout(() => history.push('/'), 2000)
    } catch (err: any) {
      // console.log(err.message)
      setErrorMsg(objError['Internal Server Error'])
      return setTimeout(() => setErrorMsg(''), 2000)
    }
  }

  return (
    <section>
      <h2>Bem-vindo(a) à página de detalhes do usuário!</h2>

      <UserForm update />

      {!redirect && (
        <section className="user-container">
          <UserCard userName={userName} email={email} />
          <div className="user-image">
            <img src={image} alt={userName} />
          </div>
        </section>
      )}

      <div>
        <button type="button" onClick={() => handleDeleteUser(id)}>
          Remover usuario
        </button>
      </div>

      <Link to="/">
        <h3>Voltar para a página principal</h3>
      </Link>

      {errorMsg && <h2>{errorMsg}</h2>}

      {redirect && (
        <h2>
          Usuário deletado com Sucesso! Você será redirecionado para a página
          principal em instantes ...
        </h2>
      )}
    </section>
  )
}
