import React, { useContext, useState } from 'react';
import { NewsContext } from '../context/NewsContextProvider';
import SingleHeadline from './SingleHeadline';

const Headlines = () => {
    const newsArticles = useContext(NewsContext);
    const [query, setQuery] = useState('')
    const [date, setDate] = useState('');
    const filteredHeadlines = newsArticles
        .filter((headline) => {
            // console.log((JSON.stringify(new Date(headline.publishedAt)).slice(0, 11) + '"') == JSON.stringify(date))
            // console.log((JSON.stringify(new Date(headline.publishedAt)).slice(0, 11) + '"'));
            return headline.title.toLowerCase().includes(query.toLowerCase())
        })
    var queriedHeadlines = '';
    if (date === '') {
        queriedHeadlines = filteredHeadlines;
    }
    else {
        queriedHeadlines = filteredHeadlines.filter((headline) => (JSON.stringify(new Date(headline.publishedAt)).slice(0, 11) + '"') === JSON.stringify(date));
    }
    const headlines = queriedHeadlines.map((article, index) => {
        return <SingleHeadline article={article} key={index} />
    });
    const queryChange = (event) => {
        if (event.target.name === 'query') {
            setQuery(event.target.value)
        }
        else {
            setDate(event.target.value);
        }
    }
    return (
        <>
            <div className="container">
                <div className="form-group form-inline d-flex justify-content-end">
                    <label htmlFor="query">Search Article: </label>
                    <input type="text" className="form-control" id="query" name="query" onChange={queryChange} />
                </div>
                <div className="form-group d-flex justify-content-end">
                    <label htmlFor="date">Date Published: </label>
                    <input type="date" name="date" id="date" onChange={queryChange} />
                </div>
                <div className="card-columns container">
                    {headlines}
                </div>
            </div>
        </>
    )
}

export default Headlines;
