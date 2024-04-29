import { useState } from 'react'

import { UserCard } from '@/components/userCard'
import { UserType } from '@/services/userApi/user-api.types'

import s from './userList.module.scss'

export const UserList = ({ users }: Props) => {
  const [activeCard, setActiveCard] = useState<string>('')

  const onClickSetActive = (id: string) => {
    if (activeCard === id) {
      setActiveCard('')

      return
    }
    setActiveCard(id)
  }

  return (
    <div className={s.userList}>
      {users.map(el => (
        <UserCard
          activeCard={activeCard === el.login.uuid}
          key={el.login.uuid}
          onClickSetActive={onClickSetActive}
          user={el}
        />
      ))}
    </div>
  )
}

type Props = { users: UserType[] }
