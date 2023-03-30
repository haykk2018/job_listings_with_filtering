import {combineReducers} from 'redux'

import {positionReducers} from './positions/position-reducers'
import {filterReducer} from "./filters/filter-reducser";

export const rootReducer = combineReducers({
    positions: positionReducers,
    filters: filterReducer
})