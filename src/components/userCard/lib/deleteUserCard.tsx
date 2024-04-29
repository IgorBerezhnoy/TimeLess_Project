import { memo } from 'react'

import { TrashIcon } from '@/assets/icons'

import s from '@/components/userCard/userCard.module.scss'

export const DeleteUserCard = memo(({ deleteUser }: { deleteUser: () => void }) => {
  return (
    <div className={s.trash} onClick={deleteUser}>
      <TrashIcon className={s.icon} />
    </div>
  )
})
