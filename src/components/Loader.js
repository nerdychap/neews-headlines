import React from 'react';
import { GridLoader } from 'react-spinners';
import ClockLoader from 'react-spinners/ClockLoader'

const Loader = () => {
    return (
        <div style={{ display: 'grid', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <ClockLoader />
        </div>
    )
}

export default Loader;
