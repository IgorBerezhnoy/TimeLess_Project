import { RefreshButton } from '@/components/refreshButton'
import { TextField } from '@/components/textField'

import s from './searchHeader.module.scss'

export const SearchHeader = ({ refetch }: Props) => {
  return (
    <div className={s.wrapper}>
      <TextField placeholder={'Search'} />
      <div>
        <RefreshButton refetch={refetch} />
      </div>
    </div>
  )
}

type Props = {
  refetch: () => void
}
