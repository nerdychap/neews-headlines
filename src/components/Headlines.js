import React, { useContext, useState } from 'react';
import { NewsContext } from '../context/NewsContextProvider';
import Form from './Form';
import SingleHeadline from './SingleHeadline';

const Headlines = () => {
    const newsArticles = useContext(NewsContext);
    const [query, setQuery] = useState('')
    const [date, setDate] = useState('');
    const filteredHeadlines = newsArticles.filter((headline) => {
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
                <Form queryChange={queryChange} />
                <h2 className="text-center p-1">Headlines</h2>
                <div className="card-columns container">
                    {headlines}
                </div>
            </div>
        </>
    )
}

export default Headlines;
