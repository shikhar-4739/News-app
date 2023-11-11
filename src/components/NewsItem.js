import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl ? "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/09/18/1283694-aditya-l1-isro.jpg?im=FitAndFill=(700,400)":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title} <h6><span class="badge bg-secondary"> {source}</span></h6></h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn  btn-sm btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
