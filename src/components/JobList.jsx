import {JobPosition} from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {selectAllPositions} from "../store/positions/position-selectors";

import {addFilter} from "../store/filters/filter-actions";

const JobList = () => {

    const dispatch = useDispatch();

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter))
    }

    const positions = useSelector(selectAllPositions);

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
            ))}
        </div>
    )
}

export {JobList};