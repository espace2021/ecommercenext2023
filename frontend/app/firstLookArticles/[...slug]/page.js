import React from 'react'
import DetailArticles from '@/components/homePages/DetailArticles';
import axios from 'axios'

async function getArticles(scategorieID){

  const res = await axios.get(`http://localhost:3001/api/articles/scat/${scategorieID}`)
  const articles = await res.data;
  return articles;
  }

const DetailArticlesPage = async({params}) => {
    const articles = await getArticles(params.slug[0])
   
  return (
    <div>
      <h2>{decodeURI(params.slug[1])}</h2>
      <DetailArticles articles={articles} />
    </div>
  )
}

export default DetailArticlesPage
