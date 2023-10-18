import './MostPopularLiveStream.css'

import MostPopularLiveStreamData from '../../data/MostPopularLiveStreamData'

import {Card, SectionHeader, SectionWrapper} from '../../components/index'

const MostPopularLiveStream = () => {

  const cards= MostPopularLiveStreamData.map( card=>{
    return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
  })
  return (
    <>
    <SectionWrapper>
       <SectionHeader>Most Popular Live Stream</SectionHeader>
        <div className='most-popular-live-stream-items'>
          {cards}
        </div>
      </SectionWrapper>
    </>
  )
}

export default MostPopularLiveStream