import {ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER} from './filter-actions'

export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case CLEAR_FILTER: {
            return []
        }
        case ADD_FILTER:{
            if (state.includes(action.filter)) {
                return state;
            }
            return [...state, action.filter ]
        }
        case REMOVE_FILTER: {
            return state.filter(i=>i!==action.filter)
        }
        default:
            return state
    }
}

