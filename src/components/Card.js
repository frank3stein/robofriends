import React from 'react';

export default ({ username, id, name, email }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2'>
            <img src={`https://robohash.org/${username}?200x200`} alt="Robots" />
            <div>
                <h2>{name}</h2>

                <p>{email}</p>
            </div>
        </div>
    )
}