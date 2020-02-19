import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import quote from './quote'

export default combineReducers({
  todos,
  visibilityFilter,
  quote
})
