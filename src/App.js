import {TheHeader} from "./components/TheHeader";
import {FilterPanel} from "./components/FilterPanel";
import {JobList} from "./components/JobList";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addPositions} from "./store/positions/position-actions"
import data from "./mock/data.json"

function App() {

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(addPositions(data))
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
