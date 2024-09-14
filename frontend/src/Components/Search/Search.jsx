import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import NewsCard from '../NewsCard/NewsCard';

function Search() {

  const {topic} = useParams()
  const [news, setNews] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{

    const searchByTopic = async()=>{

      try {

        const response = await axios(`http://localhost:3000/api/customSearch?topic=${topic}`)
        setNews(response.data.articles)
        setLoading(false);

        
      } catch (error) {
        console.log(error)
      }
  
    }
    searchByTopic();
  },[topic])

  if (loading){ 
    
    return ( 
    
    <div className='flex justify-center items-center h-[40vh] '>
      <p className='text-white m-3/5 text-3xl'>Loading...</p>
    </div>
    )
  };

  return (
    
    <>
    <h1 className='font-serif my-2 text-xl md:text-3xl text-white text-center'>{topic} Related News </h1>
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

export default Search