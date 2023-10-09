import { FeaturedGames,LiveStream,MostPopular,TopDownload } from '../../sections'
import './Browse.css'

function Browse() {
  return (
    <>
      <div className='row browse-section'> 
        <FeaturedGames/>
        <TopDownload/>
        <LiveStream/>
        <MostPopular/>
      </div>
    </>
  )
}

export default Browse