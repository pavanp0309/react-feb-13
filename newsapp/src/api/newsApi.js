
// function for fetching the news from an api
const fetchNews=async(category="general",lang="en",country="us")=>{
    try {
        let res=await fetch(`${import.meta.env.VITE_NEWS_BASE_URL}?category=${category}&lang=${lang}&country=${country}&apikey=${import.meta.env.VITE_NEWS_API_KEY}`)
        let news= await res.json()
        console.log(news)
        return await news.articles || []
    } catch (error) {
        console.log(error.name)
        return []
    }
}

export default fetchNews