import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import UserForm from '../components/UserForm'
import { getAllUsers } from '../services/api'
import { UserResponse } from '../utils'

export default function Home() {
  const [users, setUsers] = useState<UserResponse[]>([])

  useEffect(() => {
    const getAllUsersList = async () => {
      const users = await getAllUsers()

      setUsers(users)
    }

    getAllUsersList()
  }, [users])

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
              <li key={id}>
                <UserCard id={id} userName={userName} email={email} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
