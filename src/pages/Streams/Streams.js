import { FeaturedGames, LiveStream, MostPopular, TopDownload } from '../../sections'
import './Streams.css'

const Streams = () => {
  return (
    <>
      <div className='row browse-section'> 
        <FeaturedGames title="Live Streams"/>
        <TopDownload title="Top Streamers"/>
        <MostPopular/>
      </div>
    </>
  )
}

export default Streams