import React from 'react'

export default React.memo(({ setSearch }: { setSearch: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div className="pa2">

            <input type="search" placeholder="Search Robots" className="pa3 ba b--green bg-lightest-blue" onChange={(event) => setSearch(event.target.value)} />

        </div>
    );

})
