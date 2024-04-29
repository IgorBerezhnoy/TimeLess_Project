import { useState } from 'react'
import { useSelector } from 'react-redux'

import { UserCard } from '@/components/userCard'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { deleteUser, selectFilterUsers } from '@/services/usersSlise/users.slice'

import s from './userList.module.scss'

export const UserList = () => {
  const users = useSelector(selectFilterUsers)
  const [activeCard, setActiveCard] = useState<string>('')
  const dispatch = useAppDispatch()
  const onClickSetActive = (id: string) => {
    if (activeCard === id) {
      setActiveCard('')

      return
    }
    setActiveCard(id)
  }
  const deleteUserHandler = (id: string) => {
    dispatch(deleteUser({ id }))
  }

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
