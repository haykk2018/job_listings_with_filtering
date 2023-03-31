import {JobPosition} from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {addFilter} from "../store";

const JobList = () => {

    const dispatch = useDispatch();

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter))
    }

    const currentFilters = useSelector(state=> state.filters);
    const positions = useSelector((state) => {
        if (currentFilters.length===0) return state.jobs;

        return state.jobs.filter(job => {
            const jobFilters = [].concat(job.role, job.level, ...job.languages, ...job.tools);
            return currentFilters.every(filter => jobFilters.includes(filter))
        })
    });

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
            ))}
        </div>
    )
}

export {JobList};