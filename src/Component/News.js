import React from 'react'
import { NewsItem } from './NewsItem'
import { useState, useEffect } from 'react'
import { Spinner } from './Spinner'
import PropTypes from "prop-types"

export const News = (props) => {
//PropTypes
  News.propTypes =
  {
    country: "in",
    category: "general"
  }

  News.defaultProps = {
    country: PropTypes.string,
    category: PropTypes.string
  }


  // UseState
  const [news, setNews] = useState([])  // for api
  const [page, setPage] = useState(1)   // used to define total page
  const [articlesPerPage, setTarticlesPerPage] = useState(9)  // used to define article per page setArticle is never used
  const [loading, setLoading] = useState(false)  // loader


// Api call using fetch and useEffect is used because we want call api very time it is call (page refresh)..
  const loadNews = async () => {
    setLoading(true)
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3c6860636e6f475e9f777d8b5d26d947&page=${page}&pageSize=${articlesPerPage}`)     // use dtemplate literals of page and pafeSize and edefine page and articlesPerpage to it respectively
    const jsonResponse = await response.json()
    setNews(jsonResponse.articles)
    setLoading(false)
  }
  useEffect(() => {
    loadNews()
  }, [page, articlesPerPage])  // <--- it is define because we used template literals (chatGpt) 


// Pagination
  const handlePrevious = async () => {
    console.log("Into the previous")
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = async () => {
    console.log("Into the next")
    if (page < 33 / articlesPerPage) {
      setPage(page + 1)
    }
  }


  return (
    <div className='container my-3'>
      <h2 className='text-center mb-5 mt-5'>Top headline</h2>
      {loading && <Spinner />}   {/* For spinner it will be shown if loading is true {loading &&} wiil be true then spinner is shown it is js code so mit is written in{}*/}
      <div className='row'>
        {
          !loading && news.map((val, index) => {
            return <div className='col-md-4 my-3 ' key={index}>
              <NewsItem  title={val.title ? val.title.slice(0, 45) : ""} desc={val.description ? val.description.slice(0, 100) : ""} img={val.urlToImage} read={val.url} author={val.author} publishedAt={val.publishedAt} source={val.source.name} />
            </div>
          })
        }
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={page <= 1} className="btn btn-secondary" onClick={handlePrevious}>&larr; Previous</button>
          <button type="button" disabled={page >= 33 / articlesPerPage} className="btn btn-secondary" onClick={handleNext}>Next &rarr;</button>
        </div>
      </div>
    </div>

  )
}
