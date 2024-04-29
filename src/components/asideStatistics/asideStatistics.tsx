import { memo } from 'react'

import { AgeGroupStatistics } from '@/components/asideStatistics/lib/ageGroupStatistics'
import { GenderGroupsStatistics } from '@/components/asideStatistics/lib/genderGroupsStatistics'
import { CardBg } from '@/components/cardBg'

import s from './asideStatistics.module.scss'

export const AsideStatistics = memo(
  ({ age10to20, age21to30, age31to40, age41to50, count, female, male, more51 }: Props) => {
    const ageGroups = [age10to20, age21to30, age31to40, age41to50, more51]
    const genderGroups = [male, female]

    return (
      <aside>
        <CardBg className={s.wrapper}>
          <div className={s.count}> {count} Users</div>
          <AgeGroupStatistics ageGroups={ageGroups} />
          <GenderGroupsStatistics genderGroups={genderGroups} />
        </CardBg>
      </aside>
    )
  }
)

type Props = {
  age10to20: number
  age21to30: number
  age31to40: number
  age41to50: number
  count: number
  female: number
  male: number
  more51: number
}
