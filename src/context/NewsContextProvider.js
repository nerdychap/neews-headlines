import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import Form from '../components/Form';
import Loader from '../components/Loader';
import RequestError from '../components/RequestError';
export const NewsContext = createContext({});

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('Apple')
    const [date, setDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [hasError, sethasError] = useState(false);
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
        Axios.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${query}&from=${date}&to=${date}&sortBy=popularity&apiKey=f3fe839d93d44c96830015d70b6b29a1`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
        })
            .then(results => {
                setNews(results.data.articles);
                setIsLoading(false);
            })
            .catch(error => {
                setErrorMessage(error.message);
                sethasError(true);
                setIsLoading(false);
            });

    }

    useEffect(() => {

        Axios.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=f3fe839d93d44c96830015d70b6b29a1`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
        })
            .then(results => {
                setNews(results.data.articles);
                setIsLoading(false);
            })
            .catch(error => {
                setErrorMessage(error.message);
                sethasError(true);
                setIsLoading(false);
            });
    }, [])
    const FormHeading = <><Form data={{ query, date, queryChange, querySubmit }} /><h2 className="text-center p-1">Headlines</h2></>;
    if (isLoading) return <>{FormHeading}<Loader /></>
    else if (hasError) return <><h1>Error</h1>{FormHeading}<RequestError errorMessage={errorMessage} /></>;
    return (
        <>
            {FormHeading}
            <NewsContext.Provider value={{ news, queryChange, querySubmit, query, date }}>
                {children}
            </NewsContext.Provider>
        </>
    )

}

export default NewsContextProvider;
