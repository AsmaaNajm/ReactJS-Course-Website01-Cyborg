import { FeaturedGames,TopDownload } from '../../sections'
import './Browse.css'

function Browse() {
  return (
    <>
      <div className='row browse-section'> 
        <FeaturedGames/>
        <TopDownload/>
      </div>
    </>
  )
}

export default Browse