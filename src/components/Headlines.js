import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContextProvider';
import SingleHeadline from './SingleHeadline';

const Headlines = () => {
    const { news } = useContext(NewsContext);
    const headlines = news.map((article, index) => {
        return <SingleHeadline article={article} key={index} />
    });
    return (
        <>
            <div className="container">
                {/* <Form queryChange={queryChange} querySubmit={querySubmit} /> */}
                <div className="card-columns container">
                    {headlines}
                </div>
            </div>
        </>
    )
}

export default Headlines;
