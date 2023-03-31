import {configureStore, createSlice} from '@reduxjs/toolkit'

const jobLIstAndFilterSlice = createSlice({
    name: 'jobLIstAndFilter',
    initialState: {
        jobs: [],
        filters: []
    },
    reducers: {
        addJobs: (state, action) => {
            state.jobs = action.payload
        },
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

export const {addJobs, addFilter, clearFilter, removeFilter} = jobLIstAndFilterSlice.actions