import React from 'react'
import { MdDateRange } from 'react-icons/md'

const SingleHeadline = ({ article }) => {
    const { author, title, urlToImage, publishedAt, source: { name } } = article;
    const publishDate = new Date(publishedAt);
    return (
        <>
            <div className="card" style={{ height: 500, overflow: 'auto' }}>
                <img className="card-img-top" src={`${urlToImage}`} alt={`${author || "---"} article image`} style={{ width: '100%', height: 200 }} />
                <div className="card-body" >
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">By {author || '---'}, {name} <br /> <MdDateRange /> {publishDate.toDateString()}</p>
                </div>
            </div>
        </>
    )
}

export default SingleHeadline
