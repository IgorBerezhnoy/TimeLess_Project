import { SearchHeader } from '@/components/searchHeader'
import { UserList } from '@/components/userList'
import { useGetUsersQuery } from '@/services/userApi/user-api.service'

import '../src/styles/index.scss'

export function App() {
  const { data, isError, isFetching, refetch } = useGetUsersQuery('11')

  if (isFetching) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      <SearchHeader refetch={refetch} />
      {data && <UserList users={data.results} />}
    </div>
  )
}
