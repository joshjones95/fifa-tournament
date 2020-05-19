import { combineReducers } from 'redux'
import { players } from './players'
import { fixtures } from './fixtures'

export default combineReducers({
  players,
  fixtures
})