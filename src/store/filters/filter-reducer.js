import {createReducer} from "@reduxjs/toolkit";
import {addFilter, clearFilter, removeFilter} from "./filter-actions";

export const filterReducer = createReducer([], (builder) => {
    builder
        .addCase(addFilter, (state, action) => {
            state.filters = [...state.filters, action.payload]
        })
        .addCase(removeFilter, (state, action) => {
            state.filters = state.filters.filter(el => el !== action.payload)
        })
        .addCase(clearFilter, (state) => {
            state.filters = []
        })
})