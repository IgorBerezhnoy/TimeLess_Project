import { AsideStatistics } from '@/components/asideStatistics/asideStatistics'
import { getStatistics } from '@/components/asideStatistics/lib/getStatistics'
import { UserType } from '@/services/userApi/user-api.types'

export const AsideStatisticsContainer = ({ users }: Props) => {
  const statistic = getStatistics(users)

  return <AsideStatistics {...statistic} />
}
type Props = { users: UserType[] }
