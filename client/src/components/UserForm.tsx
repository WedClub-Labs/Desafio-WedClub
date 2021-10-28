import { FormEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { createUser } from '../services/api'

type TypeForm = {
  update?: boolean
}

export default function UserForm({ update = false }: TypeForm) {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [hasError, setHasError] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const history = useHistory()

  const handleCreateSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim() || !userName.trim()) {
      setErrorMsg('Todos os campos devem ser preenchidos!')
      return setHasError(true)
    }

    await createUser(userName, email)

    setEmail('')
    setUserName('')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg('')
      setHasError(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [hasError])

  const handleUpdateSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim() || !userName.trim()) {
      setErrorMsg('Todos os campos devem ser preenchidos!')

      return setHasError(true)
    }

    setRedirect(true)

    setTimeout(() => history.push('/'), 2000)
  }

  return (
    <section>
      {update ? (
        <h3>Atualizar informações do usuário</h3>
      ) : (
        <h3>Cadastre um novo usuario</h3>
      )}

      <form onSubmit={update ? handleUpdateSubmit : handleCreateSubmit}>
        <input
          type="text"
          value={userName}
          placeholder="Nome"
          onChange={({ target: { value } }) => setUserName(value)}
        />

        <input
          type="text"
          value={email}
          placeholder="E-mail"
          onChange={({ target: { value } }) => setEmail(value)}
        />

        <button type="submit">{update ? 'Atualizar' : 'Cadastrar'}</button>
      </form>

      {hasError && <span>{errorMsg}</span>}

      {redirect && (
        <h2>
          Sucesso! Você será redirecionado para a página principal em instantes
          ...
        </h2>
      )}
    </section>
  )
}
