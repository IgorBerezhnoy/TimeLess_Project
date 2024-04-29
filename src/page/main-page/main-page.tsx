import { AsideStatisticsContainer } from '@/components/asideStatistics/asideStatisticsContainer'
import { UserList } from '@/components/userList'

import s from './main-page.module.scss'

export const MainPage = () => {
  return (
    <div className={s.wrapper}>
      <UserList />
      <AsideStatisticsContainer />
    </div>
  )
}
