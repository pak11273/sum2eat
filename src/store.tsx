import { createStore } from 'redux'
import { locality } from './reducers/index'
import { StoreState } from './types/index'
const store = createStore<StoreState>(locality, {
  language: 'British (English)',
  country: 'United Kingdom',
  auth: {
    authenticated: false,
  },
})
