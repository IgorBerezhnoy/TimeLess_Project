import { ChangeEvent, useState } from 'react'

import { DebouncedInput } from '@/components/debounce'
import { RefreshButton } from '@/components/refreshButton'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { searchUser } from '@/services/usersSlise/users.slice'

import s from './searchHeader.module.scss'

export const SearchHeader = ({ refetch }: Props) => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState<string>('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }
  const onDebouncedChange = (value: string) => {
    dispatch(searchUser({ search: value }))
  }

  return (
    <div className={s.wrapper}>
      <DebouncedInput
        onChange={onChange}
        onDebouncedChange={onDebouncedChange}
        placeholder={'Search'}
        value={search}
      />
      <div>
        <RefreshButton refetch={refetch} />
      </div>
    </div>
  )
}

type Props = {
  refetch: () => void
}
