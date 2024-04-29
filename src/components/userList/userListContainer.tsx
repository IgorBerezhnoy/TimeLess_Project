import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import { UserList } from '@/components/userList/userList'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { deleteUser, selectFilterUsers } from '@/services/usersSlise/users.slice'

export const UserListContainer = () => {
  const users = useSelector(selectFilterUsers)
  const [activeCard, setActiveCard] = useState<string>('')
  const dispatch = useAppDispatch()
  const onClickSetActive = useCallback(
    (id: string) => {
      if (activeCard === id) {
        setActiveCard('')

        return
      }
      setActiveCard(id)
    },
    [activeCard, setActiveCard]
  )
  const deleteUserHandler = useCallback(
    (id: string) => {
      dispatch(deleteUser({ id }))
    },
    [dispatch]
  )

  return (
    <UserList
      activeCard={activeCard}
      deleteUserHandler={deleteUserHandler}
      onClickSetActive={onClickSetActive}
      users={users}
    />
  )
}
