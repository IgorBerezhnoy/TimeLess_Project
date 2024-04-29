import { useSelector } from 'react-redux'

import { MainPage } from '@/page/main-page/main-page'
import { selectUsers } from '@/services/usersSlise/users.slice'

export const MainPageContainer = () => {
  const users = useSelector(selectUsers)

  return <MainPage users={users} />
}
