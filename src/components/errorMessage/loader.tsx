import { memo } from 'react'

import { RefreshButton } from '@/components'

import s from './loader.module.scss'

export const ErrorMessage = memo(({ refetch }: { refetch: () => void }) => {
  return (
    <div className={s.error}>
      Something went wrong. Try it :
      <RefreshButton refetch={refetch} />
    </div>
  )
})
