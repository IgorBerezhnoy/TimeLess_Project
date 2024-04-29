import { memo } from 'react'

import { CardBg } from '@/components/cardBg'
import { DeleteUserCard } from '@/components/userCard/lib/deleteUserCard'
import { ProfileImageContainerUserCard } from '@/components/userCard/lib/profileImageContainerUserCard'
import { ProfileInfoUserCard } from '@/components/userCard/lib/profileInfoUserCard'
import { UserType } from '@/services/userApi/user-api.types'
import { clsx } from 'clsx'

import s from './userCard.module.scss'

export const UserCard = memo(
  ({
    activeCard,
    deleteUser,
    onClickSetActive,
    user: { dob, email, location, name, phone, picture },
  }: Props) => {
    return (
      <CardBg
        className={clsx(s.profileCard, activeCard && s.activeCard)}
        onClick={onClickSetActive}
      >
        {activeCard && <DeleteUserCard deleteUser={deleteUser} />}
        <ProfileImageContainerUserCard
          activeCard={activeCard}
          email={email}
          name={name}
          picture={picture}
        />
        <ProfileInfoUserCard dob={dob} location={location} phone={phone} />
      </CardBg>
    )
  }
)

type Props = {
  activeCard: boolean
  deleteUser: () => void
  onClickSetActive: () => void
  user: UserType
}
