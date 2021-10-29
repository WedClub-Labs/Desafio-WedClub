import { UserCardProps } from '../../utils/types'

import './UserCard.css'

export default function UserCard({ userName, email }: UserCardProps) {
  return (
    <div className="user-card-container">
      <span>Nome: {userName}</span>
      <span>Email: {email}</span>
    </div>
  )
}
