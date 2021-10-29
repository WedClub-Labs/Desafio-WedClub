import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard'
import UserForm from '../../components/UserForm/UserForm'
import { deleteUser, getAllUsers } from '../../services/api'
import { UserResponse } from '../../utils/types'

export default function Home() {
  const [users, setUsers] = useState<UserResponse[]>([])

  const history = useHistory()

  useEffect(() => {
    const getAllUsersList = async () => {
      try {
        const users = await getAllUsers()
        setUsers(users)
      } catch (err: any) {
        // console.log(err.response.data.message)
      }
    }

    getAllUsersList()
  }, [users])

  //componentWillUnmount
  useEffect(() => () => setUsers([]), [window.location.pathname])

  const handleDeleteUser = async (id: string, redirect: boolean = false) => {
    try {
      await deleteUser(id)

      if (redirect) {
        return setTimeout(() => history.push('/'), 2000)
      }
    } catch (err: any) {
      // console.log(err.message)
    }
  }

  return (
    <div>
      <h1>Cadastro de usuarios</h1>
      <UserForm />

      <div>
        <h3>Lista de usuarios</h3>

        {!users.length ? (
          <span>Ainda nao ha usuarios cadastrados</span>
        ) : (
          <ul>
            {users.map(({ id, userName, email }) => (
              <section key={id}>
                <Link to={`/user/${id}`}>
                  <li>
                    <UserCard userName={userName} email={email} />
                  </li>
                </Link>

                <div>
                  <button
                    type="button"
                    onClick={() => handleDeleteUser(id)}
                  >
                    Remover usuario
                  </button>
                </div>
              </section>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
