import React, { useContext } from 'react';
import { BiSort, BiFilterAlt } from 'react-icons/bi';
import filtersContext from '../../contexts/filters/filtersContext';
import FilterBarOptions from './FilterBarOptions';


const FilterBar = () => {

    const { handleMobSortVisibility, handleMobFilterVisibility } = useContext(filtersContext);


    return (
        <>
            {/*===== Filterbar-default =====*/}
            <aside id="filterbar">
                <div className="filterbar_wrapper">
                    <FilterBarOptions />
                </div>
            </aside>

            
        </>
    );
};

export default FilterBar;