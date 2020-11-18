import React from 'react';

const Form = ({ queryChange }) => {
    return (
        <>
            <div className="form-group form-inline d-flex justify-content-end">
                <label htmlFor="query">Search Article: </label>
                <input type="text" className="form-control" id="query" name="query" onChange={queryChange} />
            </div>
            <div className="form-group d-flex justify-content-end">
                <label htmlFor="date">Date Published: </label>
                <input type="date" name="date" id="date" onChange={queryChange} />
            </div>
        </>
    )
}

export default Form;
