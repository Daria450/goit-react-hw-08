
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();

    const filter = useSelector(selectNameFilter);

    const handleChangeQuery = query => {
        dispatch(changeFilter(query))
    }


    return (
        <>
            <label className="input flex justify-self-center input-accent max-w-70" >
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" required placeholder="Search" id='search' value={filter}
                    onChange={(e) => handleChangeQuery(e.target.value)} />
            </label>

        </>
    )
}

export default SearchBox