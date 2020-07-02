import React from 'react';

const SearchBox =({searchfield, searchChange })=>{
    return(
        <div className='pa2'>
            <input 
            className='tc ba b--green bg-lightest-blue pa3 mb4'
            type='search' 
            placeholder='search your favourite robots here'
            onChange={searchChange} 
            />
            
        </div> 
        );
}

export default SearchBox;