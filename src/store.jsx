import { configureStore } from '@reduxjs/toolkit'
import Reducer from './components/project_3/counterSlice'

export default configureStore({
  reducer: {
    counter: Reducer,
  },
})