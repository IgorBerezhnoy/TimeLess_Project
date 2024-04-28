import { CardBg } from '@/components/cardBg'
import { UserType } from '@/services/userApi/user-api.types'
import { changeOnDots } from '@/utils/changeOnDots'
import { formatDate } from '@/utils/formatDate'
import { clsx } from 'clsx'

import s from './userCard.module.scss'

export const UserCard = ({ user: { dob, email, location, name, phone, picture } }: Props) => {
  return (
    <CardBg className={clsx(s.profileCard)}>
      <div className={s.profileImageContainer}>
        <img
          alt={'image of ${name.first} ${name.last}'}
          className={s.profileImage}
          src={picture.thumbnail}
        />
        <div>
          <div className={s.name}>
            {name.first} {name.last}
          </div>
          <div className={s.email}>{changeOnDots(email, 30)}</div>
        </div>
      </div>
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
          <span className={s.right}>
            {changeOnDots(`${location.city}, ${location.country}`, 30)}
          </span>
        </div>
      </div>
    </CardBg>
  )
}

type Props = {
  user: UserType
}
