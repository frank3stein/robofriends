import React from 'react';
import SearchBox from './Searchbox'


const Header = ({ setSearch, title }) => {
    return (
        <header style={{
            position: 'sticky',
            zIndex: 1,
            background: 'linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1))',
            top: 0
        }}>

            <h1 style={{
                fontFamily: "SEGA LOGO FONT",
                fontWeight: 200,
                color: "#0cacc4",
            }}>{title}</h1>
            <SearchBox setSearch={setSearch} />

        </header>
    )
}

export default Header