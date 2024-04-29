import { memo } from 'react'

import { changeOnDots } from '@/utils/changeOnDots'
import { formatDate } from '@/utils/formatDate'

import s from '@/components/userCard/userCard.module.scss'

export const ProfileInfoUserCard = memo(({ dob, location, phone }: Props) => {
  return (
    <div className={s.profileInfo}>
      <div className={s.infoCell}>
        <span className={s.left}>Phone No: </span>
        <span className={s.right}>{phone}</span>
      </div>
      <div className={s.infoCell}>
        <span className={s.left}>Birthday: </span>
        <span className={s.right}>{formatDate(dob.date)}</span>
      </div>
      <div className={s.infoCell}>
        <span className={s.left}>Address:</span>
        <span className={s.right}>{changeOnDots(`${location.city}, ${location.country}`, 30)}</span>
      </div>
    </div>
  )
})
type Props = {
  dob: {
    date: string
  }
  location: {
    city: string
    country: string
  }
  phone: string
}
