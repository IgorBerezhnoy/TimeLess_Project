import { memo } from 'react'

import { sortCategory } from '@/constants/sortCategory'
import { pluralize } from '@/utils/pluralize'

import s from '@/components/asideStatistics/asideStatistics.module.scss'

export const AgeGroupStatistics = memo(({ ageGroups }: { ageGroups: number[] }) => {
  return (
    <div className={s.age}>
      <div className={s.title}>Age Groups</div>
      <div className={s.group}>
        {ageGroups.map((el, i) => (
          <div className={s.category} key={i}>
            <span className={s.left}>{sortCategory[i]}</span>
            <span className={s.right}>{pluralize(el)}</span>
          </div>
        ))}
      </div>
    </div>
  )
})
