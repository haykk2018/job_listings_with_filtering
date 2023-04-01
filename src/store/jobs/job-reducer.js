import { createReducer} from '@reduxjs/toolkit'
import {addJobs} from "./job-actions";


export const jobReducer = createReducer([], (builder) => {
    builder
        .addCase(addJobs, (state, action) => {
            state.jobs = action.payload
        })
})