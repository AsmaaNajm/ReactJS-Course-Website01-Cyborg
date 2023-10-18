import { FeaturedGames,LiveStream,MostPopular,TopDownload } from '../../sections'
import './Browse.css'

function Browse() {
  return (
    <>
      <div className='row browse-section'> 
        <FeaturedGames title="Featured Games"/>
        <TopDownload title="Top Downloaded"/>
        <LiveStream/>
        <MostPopular/>
      </div>
    </>
  )
}

export default Browse