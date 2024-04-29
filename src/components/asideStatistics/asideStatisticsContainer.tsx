import { useSelector } from 'react-redux'

import { AsideStatistics } from '@/components/asideStatistics/asideStatistics'
import { getStatistics } from '@/components/asideStatistics/lib/getStatistics'
import { selectUsers } from '@/services/usersSlise/users.slice'

export const AsideStatisticsContainer = () => {
  const users = useSelector(selectUsers)
  const statistic = getStatistics(users)

  return <AsideStatistics {...statistic} />
}
