import { UserCardProps } from '../utils/types'

export default function UserCard({ userName, email }: UserCardProps) {
  return (
    <>
      <div>Nome: {userName}</div>
      <div>Email: {email}</div>
    </>
  )
}
