import { memo } from 'react'

import { AsideStatisticsContainer } from '@/components/asideStatistics/asideStatisticsContainer'
import { UserListContainer } from '@/components/userList'

import s from './main-page.module.scss'

export const MainPage = memo(() => {
  return (
    <div className={s.wrapper}>
      <UserListContainer />
      <AsideStatisticsContainer />
    </div>
  )
})
