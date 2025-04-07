import React, { useEffect, useState } from 'react'
import fetchNews from '../api/newsApi'
import NewsCard from './NewsCard'

const NewsList = () => {
    const [news,setNews]=useState([]) //storing the news data
    console.log("news",news)
    const [isloading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
console.log(news)

    // useEffect For handling the api calls
    useEffect(()=>{
        
        // function to getNews 
        const getNews=async()=>{
            setIsLoading(true)
            setIsError(false)
            try {
            let news=await fetchNews() // pass category,lang,country if required
            setIsLoading(false)
            setNews(news)
            } catch (error) {
              setIsError(true)
            }
        }


        // call the function
        getNews()
      
        // cleanup function
        return ()=>{}

    },[])


if(isloading)return <h1>loading...</h1>
if(isError)return <h1>Error...</h1>

  return (
    <div className='container my-3'> 
       <h1 className='text-center'>Top Headlines</h1>
       {
        (news.length>0)?(<div className='row gy-3' >
         {
            news.map((ele)=><div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <NewsCard  ele={ele}/>
            </div>)
         }
        </div>):
        (<h2 className='text-center text-danger my-3'>No News Found</h2>)
       }
    </div>
  )
}

export default NewsList

