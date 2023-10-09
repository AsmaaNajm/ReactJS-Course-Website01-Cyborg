import { FeaturedGames,LiveStream,TopDownload } from '../../sections'
import './Browse.css'

function Browse() {
  return (
    <>
      <div className='row browse-section'> 
        <FeaturedGames/>
        <TopDownload/>
        <LiveStream/>
      </div>
    </>
  )
}

export default Browse