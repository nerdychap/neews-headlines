import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader'

const Loader = () => {
    return (
        <div className="loader">
            <ClockLoader size={75} />
        </div>
    )
}

export default Loader;
