import { UserCard } from '@/components/userCard'
import { UserType } from '@/services/userApi/user-api.types'

import s from './userList.module.scss'

export const UserList = ({ users }: Props) => {
  return (
    <div className={s.userList}>
      {users.map(el => (
        <UserCard key={el.login.uuid} user={el} />
      ))}
    </div>
  )
}

type Props = { users: UserType[] }
