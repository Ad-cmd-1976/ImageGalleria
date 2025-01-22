import React from 'react'
import { useState, useEffect } from 'react'
import { getImages } from '../util';
const Landingpage = (props) => {
  
  useEffect(() => {
    const fetchData=async ()=>{
      const response=await getImages();
      props.setimageList(response.resources);
      props.setnextCursor(response.next_cursor);
    }
    fetchData();
  }, [])
  const handleloadbutton=async ()=>{
    const response=await getImages(props.nextCursor);
    props.setimageList((currentimageList)=>[...currentimageList,...response.resources]);
    props.setnextCursor(response.next_cursor);
  }
  return (
    <>
    <div className={`${props.theme ? "text-gray-400" : "bg-black text-white"} border-2 border-violet-700 h-fit px-14 pt-10`}>
      <div className='grid grid-cols-auto gap-2'>
      {props.imageList.map((image)=>
        <img key={image.public_id} src={image.url} className='w-full h-full object-cover'></img>
      )}
      </div>
    <div id='footer' className='flex justify-center my-2'>
      {props.nextCursor && <button onClick={handleloadbutton} className='bg-blue-700 p-2 rounded-lg hover:bg-blue-600'>Load More</button>}
    </div>
    </div>
    </>
  )
}

export default Landingpage