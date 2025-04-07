import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
const {newsId}=useParams()
console.log(newsId)


// write the code here

    
  return (
    <div>
      news NewsDetails
    </div>
  )
}

export default NewsDetails
