// import {ADD_JOBS} from './job-actions';
import {createAction, createReducer} from '@reduxjs/toolkit'

const ADD_JOBS = 'jobLIstAndFilter/ADD_JOBS';

export const jobReducer = createReducer([], (builder) => {
    builder
        .addCase(ADD_JOBS, (state, action) => {
            state.jobs = action.payload
        })
})