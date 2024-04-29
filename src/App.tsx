import { SearchHeader } from '@/components/searchHeader'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { MainPage } from '@/page/main-page/main-page'
import { useGetUsersQuery } from '@/services/userApi/user-api.service'
import { setUsers } from '@/services/usersSlise/users.slice'

import '../src/styles/index.scss'

export function App() {
  const { data, isError, isFetching, refetch } = useGetUsersQuery('10')
  const dispatch = useAppDispatch()

  dispatch(setUsers({ users: data?.results ?? [] }))

  if (isFetching) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      <SearchHeader refetch={refetch} />
      <MainPage />
    </div>
  )
}
