import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'

interface ILoadingStatus {
  loadingStatus: keyof typeof LoadingStatuses
  error: Error | null
}

export enum LoadingStatuses {
  idle = 'idle',
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
}

const usersAdapter = createEntityAdapter<IUserModel>({
  selectId(user) {
    return user.login.uuid
  },
  sortComparer(a, b) {
    const firstName = `${a.name.first} + ${a.name.last}`
    const secondName = `${b.name.first} + ${b.name.last}`
    return firstName.localeCompare(secondName)
  },
})

const initialState = usersAdapter.getInitialState<ILoadingStatus>({
  loadingStatus: 'idle',
  error: null,
})

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (url: string) => {
    const data = await fetchData<IUsersResponse>(url)
    return data.results
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userDataUpdated: usersAdapter.updateOne,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loadingStatus = LoadingStatuses.resolved
        usersAdapter.setAll(state, payload)
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loadingStatus = LoadingStatuses.pending
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loadingStatus = LoadingStatuses.rejected
        state.error =
          payload instanceof Error ? payload : new Error('unknown error')
      })
  },
})

export const { userDataUpdated } = usersSlice.actions

export default usersSlice.reducer
