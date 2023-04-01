import {configureStore, createSlice} from '@reduxjs/toolkit'
import {jobReducer} from "./jobs/job-reducer";
import {filterReducer} from "./filters/filter-reducer";


const jobLIstAndFilterSlice = createSlice({
    name: 'jobLIstAndFilter',
    initialState: {
        jobs: [],
        filters: []
    },
    reducers: {
        ADD_JOBS: jobReducer,
        ADD_FILTER: filterReducer,
        REMOVE_FILTER: filterReducer,
        CLEAR_FILTER: filterReducer,
    },

})
export const store = configureStore({
    reducer: jobLIstAndFilterSlice.reducer
})