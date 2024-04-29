import { RootState } from '@/services/store'
import { UserType } from '@/services/userApi/user-api.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  filteredUsers: [] as UserType[],
  users: [] as UserType[],
}
const slice = createSlice({
  initialState,
  name: 'users',
  reducers: {
    deleteUser(state, action: PayloadAction<{ id: string }>) {
      state.filteredUsers = state.filteredUsers.filter(el => el.login.uuid !== action.payload.id)
      state.users = state.users.filter(el => el.login.uuid !== action.payload.id)
    },
    searchUser(state, action: PayloadAction<{ search: string }>) {
      state.filteredUsers = state.users.filter(
        el =>
          el.name.first.includes(action.payload.search) ||
          el.name.last.includes(action.payload.search) ||
          el.dob.age.toString().includes(action.payload.search) ||
          el.email.includes(action.payload.search) ||
          el.phone.includes(action.payload.search) ||
          el.login.username.includes(action.payload.search) ||
          el.location.country.includes(action.payload.search) ||
          el.location.city.includes(action.payload.search)
      )
    },
    setUsers(state, action: PayloadAction<{ users: UserType[] }>) {
      state.users = action.payload.users
      state.filteredUsers = action.payload.users
    },
  },
})

export const selectFilterUsers = (state: RootState) => state.users.filteredUsers
export const selectUsers = (state: RootState) => state.users.users

export const usersReducer = slice.reducer
export const { deleteUser, searchUser, setUsers } = slice.actions
