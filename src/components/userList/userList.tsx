import { memo } from 'react'

import { UserCard } from '@/components/userCard'
import { UserType } from '@/services/userApi/user-api.types'

import s from '@/components/userList/userList.module.scss'

export const UserList = memo(
  ({ activeCard, deleteUserHandler, onClickSetActive, users }: Props) => {
    return (
      <div className={s.userList}>
        {users.map(el => (
          <UserCard
            activeCard={activeCard === el.login.uuid}
            deleteUser={() => deleteUserHandler(el.login.uuid)}
            key={el.login.uuid}
            onClickSetActive={() => onClickSetActive(el.login.uuid)}
            user={el}
          />
        ))}
      </div>
    )
  }
)
type Props = {
  activeCard: string
  deleteUserHandler: (id: string) => void
  onClickSetActive: (id: string) => void
  users: UserType[]
}
