import { AsideStatisticsContainer } from '@/components/asideStatistics/asideStatisticsContainer'
import { UserList } from '@/components/userList'
import { UserType } from '@/services/userApi/user-api.types'

import s from './main-page.module.scss'

export const MainPage = ({ users }: Props) => {
  return (
    <div className={s.wrapper}>
      <UserList users={users} />
      <AsideStatisticsContainer users={users} />
    </div>
  )
}
type Props = { users: UserType[] }
