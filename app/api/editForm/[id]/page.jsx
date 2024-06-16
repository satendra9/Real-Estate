import EditForm from '@/components/EditForm'
import React from 'react'

const getTopicById = async (id) => {
  try{
  const res = await fetch(`http://localhost:3000/api/addDetails/${id}`, {
    cache: "no-store"
  })
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json();
}catch(err){
  console.log(err);
}
}

const editForm = async ({params}) => {
  const {id} = params;
  const {property} = await getTopicById(id);
  const {title, description, image, place, contact} = property;

  return (
    <div><EditForm id={id} title={title} description={description} image={image} place={place} contact={contact}/></div>
  )
}

export default editForm