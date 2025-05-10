import React from 'react'
import s from './SearchBox.module.css'
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
            <label htmlFor="search" className={s.label}>Find contacts by name <input type="text" id='search' value={filter}
                onChange={(e) => handleChangeQuery(e.target.value)} /></label>

        </>
    )
}

export default SearchBox