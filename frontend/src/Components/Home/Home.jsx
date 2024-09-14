import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsCard from '../NewsCard/NewsCard';



function TopHeadings() {

  const [news, setNews] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {

   

    const fetchHeadlineData = async () => {

      try {

        



        const response = await axios("http://localhost:3000/api/topheadings")

        setNews(response.data.articles)

        setLoading(false);


      } catch (error) {
        console.log(error)
        
      }

      

    }

    

     fetchHeadlineData()
    console.log(news)
  },[])









  if (loading){ 
    
    return ( 
    
    <div className='flex justify-center items-center h-[40vh] '>
      <p className='text-white m-3/5 text-3xl'>Loading...</p>
    </div>
    )
  };

  return (
    <>
<h1 className='font-serif m-1 text-xl md:text-3xl text-white text-center'>Top Headlines</h1>
    <div className=" flex justify-center items-center flex-wrap">
      {
        news.map((newses,index) => (
          <NewsCard 
          key={index} 
          title={newses.title} 
          description={newses.description} 
          image={newses.image} 
          articleLink={newses.url}
          publishedAt={newses.publishedAt}
          name={newses.source.name}
          content={newses.content}
          />
        ))
      }
      </div>
    </>
  )
}

export default TopHeadings