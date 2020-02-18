import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import quotes from './quotes'

export default combineReducers({
  todos,
  visibilityFilter,
  quotes
})
