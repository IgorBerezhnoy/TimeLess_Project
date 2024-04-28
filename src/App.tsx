import { SearchHeader } from '@/components/searchHeader'
import { MainPage } from '@/page/main-page/main-page'
import { useGetUsersQuery } from '@/services/userApi/user-api.service'

import '../src/styles/index.scss'

export function App() {
  const { data, isError, isFetching, refetch } = useGetUsersQuery('10')

  if (isFetching) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      <SearchHeader refetch={refetch} />
      {data && <MainPage users={data.results} />}
    </div>
  )
}
