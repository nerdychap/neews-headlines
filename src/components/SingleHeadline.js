import React from 'react';
import { MdDateRange } from 'react-icons/md';

const SingleHeadline = ({ article }) => {
    const { author, title, urlToImage, publishedAt, source: { name }, url } = article;
    const publishDate = new Date(publishedAt.slice(0, 10)).toDateString();
    return (
        <>
            <div className="card hoverable" >
                <a href={`${url}`} rel="noreferrer" className="stretched-link" target="_blank">

                </a>
                <img className="card-img-top" src={`${urlToImage}`} alt={`${name} headline`} />
                <div className="card-body" >
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">By {author || '---'}, {name} <br /> <MdDateRange /> {publishDate}</p>
                </div>

            </div>
        </>
    )
}

export default SingleHeadline;
