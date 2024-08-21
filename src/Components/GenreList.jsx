import React, { useEffect } from 'react'
import GlobalApi from '../API/GlobalApi'

const GenreList = () => {

    useEffect(()=>{
      GlobalApi.then((res)=>{
        console.log(res.data.results);
      });
    }, [])

    const genreLists= ()=>{
       GlobalApi
    }

  return (
    <div>GenreList</div>
  )
}

export default GenreList