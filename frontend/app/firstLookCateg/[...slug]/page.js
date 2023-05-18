import React from 'react'
import DetailCateg from '@/components/homePages/DetailCateg';
import axios from "axios";

async function getScategories(categorieID){

  const res = await axios.get(`http://localhost:3001/api/scategories/cat/${categorieID}`)
  const scategories = await res.data;
  return scategories;
  }

const DetailCategPage = async({params}) => {
    const scategories = await getScategories(params.slug[0])
  
  return (
    <div>
      <h2>{decodeURI(params.slug[1])}</h2>
      <DetailCateg scategories={scategories} />
    </div>
  )
}

export default DetailCategPage
