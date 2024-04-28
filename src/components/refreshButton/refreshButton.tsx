import s from './refreshButton.module.scss'

export const RefreshButton = ({ refetch }: Props) => {
  return (
    <button className={s.refetch} onClick={() => refetch()}>
      Refresh Users
    </button>
  )
}

type Props = {
  refetch: () => void
}
