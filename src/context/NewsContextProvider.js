import React, { createContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { newsApiUrl } from '../constants/constants';
export const NewsContext = createContext({});

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        fetch(newsApiUrl)
            .then(response => response.json())
            .then(results => {
                setNews(results.articles);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) return <Loader />
    return (
        <>
            <NewsContext.Provider value={news}>
                {children}
            </NewsContext.Provider>
        </>
    )

}

export default NewsContextProvider;
