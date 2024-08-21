import React from 'react'
import GenreList from '../Components/GenreList'

const Home = () => {
  return (
       <div className="grid grid-cols-4">
        <div className="hidden md:block">
          <GenreList/>
        </div>
        <div className="col-span-4 md:col-span-3" >Game List</div>
       </div>
  )
}

export default Home    // only one default export is possible in whole component