import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContextProvider';

const Form = ({ queryChange, querySubmit }) => {
    const { query, date } = useContext(NewsContext);
    return (
        <><form onSubmit={querySubmit} className="container">
            <div className="form-group form-inline d-flex justify-content-end">
                <label htmlFor="query">Search Article: </label>
                <input type="text" className="form-control" id="query" name="query" value={query} onChange={queryChange} required />
            </div>
            <div className="form-group form-inline d-flex justify-content-end">
                <label htmlFor="date">Date Published: </label>
                <input type="date" name="date" min="2020-10-18" id="date" value={date} onChange={queryChange} />
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary px-5 py-1" type="submit">Submit</button>
            </div>
        </form>

        </>
    )
}
export default Form;
