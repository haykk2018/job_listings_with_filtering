import {TheHeader} from "./components/TheHeader";
import {FilterPanel} from "./components/FilterPanel";
import {JobList} from "./components/JobList";

function App() {
    return <>
        <TheHeader/>
        <div className='container'>
            <FilterPanel/>
            <JobList/>
        </div>
    </>
}

export default App;
