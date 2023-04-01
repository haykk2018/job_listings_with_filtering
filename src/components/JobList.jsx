import {JobPosition} from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {addFilter} from "../store/filters/filter-actions";
import {selectFilters} from "../store/filters/filter-selectors";
import {selectVisiblePositions} from "../store/jobs/job-selectors";

const JobList = () => {

    const dispatch = useDispatch();

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter))
    }

    const currentFilters = useSelector(selectFilters);
    const jobs = useSelector(state=>selectVisiblePositions(state,currentFilters));

    return (
        <div className='job-list'>
            {jobs.map(item => (
                <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
            ))}
        </div>
    )
}

export {JobList};