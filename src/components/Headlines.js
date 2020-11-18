import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContextProvider';
import Form from './Form';
import SingleHeadline from './SingleHeadline';

const Headlines = () => {
    const { news, queryChange, querySubmit } = useContext(NewsContext);
    const headlines = news.map((article, index) => {
        return <SingleHeadline article={article} key={index} />
    });
    return (
        <>
            <div className="container">
                <Form queryChange={queryChange} querySubmit={querySubmit} />
                <h2 className="text-center p-1">Headlines</h2>
                <div className="card-columns container">
                    {headlines}
                </div>
            </div>
        </>
    )
}

export default Headlines;
