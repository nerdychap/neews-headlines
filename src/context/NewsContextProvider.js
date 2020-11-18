import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';
export const NewsContext = createContext({});

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('Apple')
    const [date, setDate] = useState('');
    const queryChange = (event) => {
        if (event.target.name === 'query') {
            setQuery(event.target.value)
        }
        else {
            setDate(event.target.value);
        }
    }
    const querySubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)
        Axios.get(`http://newsapi.org/v2/everything?q=${query}&from=${date}&to=${date}&sortBy=popularity&apiKey=f3fe839d93d44c96830015d70b6b29a1`)
            .then(results => {
                setNews(results.data.articles);
                setIsLoading(false);
            })

    }

    useEffect(() => {

        Axios.get(`http://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=f3fe839d93d44c96830015d70b6b29a1`)
            .then(results => {
                setNews(results.data.articles);
                setIsLoading(false);
            })
    }, [])
    if (isLoading) return <Loader />
    return (
        <>
            <NewsContext.Provider value={{ news, queryChange, querySubmit, query, date }}>
                {children}
            </NewsContext.Provider>
        </>
    )

}

export default NewsContextProvider;
