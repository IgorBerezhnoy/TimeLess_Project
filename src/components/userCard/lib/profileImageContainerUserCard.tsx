import { memo } from 'react'

import { UserType } from '@/services/userApi/user-api.types'
import { changeOnDots } from '@/utils/changeOnDots'
import { clsx } from 'clsx'

import s from '@/components/userCard/userCard.module.scss'

export const ProfileImageContainerUserCard = memo(({ activeCard, email, name, picture }: Props) => {
  return (
    <div className={s.profileImageContainer}>
      <img
        alt={`image of ${name.first} ${name.last}`}
        className={s.profileImage}
        src={picture.thumbnail}
      />
      <div>
        <div className={clsx(s.name, activeCard && s.active)}>
          {name.first} {name.last}
        </div>
        <div className={s.email}>{changeOnDots(email, 30)}</div>
      </div>
    </div>
  )
})
type Props = {
  activeCard: boolean
  email: string
  name: UserType['name']
  picture: UserType['picture']
}
