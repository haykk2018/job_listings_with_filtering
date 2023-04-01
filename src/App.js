import {TheHeader} from "./components/TheHeader";
import {FilterPanel} from "./components/FilterPanel";
import {JobList} from "./components/JobList";
import {useEffect} from "react";
import data from "./mock/data.json"
import {store} from "./store";
import {createAction} from "@reduxjs/toolkit";

function App() {
    const ADD_JOBS = createAction('jobLIstAndFilter/ADD_JOBS');

    useEffect(
        () => {
            store.dispatch(ADD_JOBS(data))
        }
    )
    return <>
        <TheHeader/>
        <div className='container'>
            {/*<FilterPanel/>*/}
            <JobList/>
        </div>
    </>
}

export default App;
