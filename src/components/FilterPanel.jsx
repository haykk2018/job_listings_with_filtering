import {Stack} from "../UI/Stack";
import {Card} from "../UI/Card";
import {Badge} from "../UI/Badge";
import {useSelector} from "react-redux";
import {clearFilter, removeFilter, store} from "../store";


const FilterPanel = () => {

    const currentFilters = useSelector(state=> state.filters);

    if(currentFilters.length > 0)
    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map((filter, index) => (
                        <Badge key={index} variant="clearable" onClear={()=>store.dispatch(removeFilter(filter))}>{filter}</Badge>
                    ))}
                </Stack>
                <button className='link' onClick={() => store.dispatch(clearFilter())}>Clear</button>
            </div>
        </Card>
    )
}

export {FilterPanel};