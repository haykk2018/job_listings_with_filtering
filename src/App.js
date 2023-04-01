import {TheHeader} from "./components/TheHeader";
import {FilterPanel} from "./components/FilterPanel";
import {JobList} from "./components/JobList";
import {useEffect} from "react";
import data from "./mock/data.json"
import {store} from "./store";
import {addJobs} from "./store/jobs/job-actions";

function App() {

    useEffect(
        () => {
            store.dispatch(addJobs(data))
        }
    )
    return <>
        <TheHeader/>
        <div className='container'>
            <FilterPanel/>
            <JobList/>
        </div>
    </>
}

export default App;
