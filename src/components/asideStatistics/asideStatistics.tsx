import { CardBg } from '@/components/cardBg'
import { gender, sortCategory } from '@/constants/sortCategory'
import { pluralize } from '@/utils/pluralize'

import s from './asideStatistics.module.scss'

export const AsideStatistics = ({
  age10to20,
  age21to30,
  age31to40,
  age41to50,
  count,
  female,
  male,
  more51,
}: Props) => {
  const ageGroups = [age10to20, age21to30, age31to40, age41to50, more51]
  const genderGroups = [male, female]

  return (
    <aside>
      <CardBg className={s.wrapper}>
        <div className={s.aa}>
          <div className={s.count}> {count} Users</div>
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
          <div className={s.gender}>
            <div className={s.title}>Gender Groups</div>
            <div className={s.group}>
              {genderGroups.map((el, i) => (
                <div className={s.category} key={i}>
                  <span className={s.left}>{gender[i]}</span>
                  <span className={s.right}>{pluralize(el)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardBg>
    </aside>
  )
}

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
