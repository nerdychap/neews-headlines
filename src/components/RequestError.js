import React from 'react'

const RequestError = ({ errorMessage }) => {
    return (
        <>
            <h1 className="text-center">{errorMessage}. Please reload page.</h1>
        </>
    )
}

export default RequestError
