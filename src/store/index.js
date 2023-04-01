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
        jobReducer: jobReducer,
        //filters: filterReducer,
        // addJobs: (state, action) => {
        //     state.jobs = action.payload
        // },
        addFilter: (state, action) => {
            state.filters = [...state.filters, action.payload]
        },
        removeFilter: (state, action) => {
            state.filters = state.filters.filter(el => el !== action.payload)
        },
        clearFilter: (state) => {
            state.filters = []
        }
    }

})

export const store = configureStore({
    reducer: jobLIstAndFilterSlice.reducer
})

export const {addFilter, clearFilter, removeFilter} = jobLIstAndFilterSlice.actions