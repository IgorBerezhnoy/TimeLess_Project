import { TextField } from '@/components/textField'
import { UserCard } from '@/components/userCard'

import '../src/styles/index.scss'

export function App() {
  return (
    <div>
      <TextField placeholder={'Search'} />
      <UserCard />
    </div>
  )
}
