import { memo } from 'react'

import { GENDER } from '@/constants/sortCategory'
import { pluralize } from '@/utils/pluralize'

import s from '@/components/asideStatistics/asideStatistics.module.scss'

export const GenderGroupsStatistics = memo(({ genderGroups }: { genderGroups: number[] }) => {
  return (
    <div className={s.gender}>
      <div className={s.title}>Gender Groups</div>
      <div className={s.group}>
        {genderGroups.map((el, i) => (
          <div className={s.category} key={i}>
            <span className={s.left}>{GENDER[i]}</span>
            <span className={s.right}>{pluralize(el)}</span>
          </div>
        ))}
      </div>
    </div>
  )
})
