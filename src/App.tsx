import { Loader } from '@/components'
import { ErrorMessage } from '@/components/errorMessage'
import { SearchHeader } from '@/components/searchHeader'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { MainPage } from '@/page/main-page/main-page'
import { useGetUsersQuery } from '@/services/userApi/user-api.service'
import { setUsers } from '@/services/usersSlise/users.slice'

import '../src/styles/index.scss'

export function App() {
  const { data, isError, isFetching, refetch } = useGetUsersQuery('500')
  const dispatch = useAppDispatch()

  dispatch(setUsers({ users: data?.results ?? [] }))

  return (
    <div>
      <SearchHeader refetch={refetch} />
      {isFetching && <Loader />}
      {!isFetching && <MainPage />}
      {isError && <ErrorMessage refetch={refetch} />}
    </div>
  )
}
