import React from 'react'

export const NewsItem = (props) => {


    return (
    <div className="card">
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "80%", zIndex: "1" }}>{props.source}
        <span className="visually-hidden">unread messages</span>
      </span>
      <img src={!props.img ? "https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg" : props.img} className="card-img-top" alt="news image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <a href={props.read} className="btn btn-primary btn-sm">Read More</a>
        <div className="card-footer mt-3">
          <small className="text-muted">By {props.author ? props.author : "Unknown"} on {new Date(props.publishedAt).toGMTString()}</small>
        </div>
      </div>
    </div>
  )
}
