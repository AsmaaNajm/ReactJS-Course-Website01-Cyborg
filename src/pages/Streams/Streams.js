import { FeaturedGames, LiveStream, MostPopular, MostPopularLiveStream, TopDownload } from '../../sections'
import './Streams.css'

const Streams = () => {
  return (
    <>
      <div className='row stream-section'> 
        <FeaturedGames title="Live Streams"/>
        <TopDownload title="Top Streamers"/>
        <MostPopularLiveStream/>
      </div>
    </>
  )
}

export default Streams