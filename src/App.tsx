import { TextField } from '@/components/textField'
import { UserList } from '@/components/userList'
import { useGetUsersQuery } from '@/services/userApi/user-api.service'

import '../src/styles/index.scss'

export function App() {
  const { data, isError, isLoading } = useGetUsersQuery('10')

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      <TextField placeholder={'Search'} />
      {data && <UserList users={data.results} />}
    </div>
  )
}
