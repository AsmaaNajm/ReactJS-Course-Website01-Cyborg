import { LiveStreamCard, PrimaryButton, SectionHeader, SectionWrapper } from '../../components'
import './LiveStream.css'
import LiveStreamData from '../../data/LiveStreamData'
import SecondarySectionWrapper from '../../components/SecondarySectionWrapper/SecondarySectionWrapper'

function LiveStream() {
  const liveStreamCards=LiveStreamData.map( card=>{
      return <LiveStreamCard image={card.image} title={card.title} content={card.content} />
  })
  return (
    <>
      <SecondarySectionWrapper>
          <SectionHeader>
            <div className='live-stream-title'>
              How To Start Your <em>LiveStream</em>
            </div>
          </SectionHeader>  
          
          <div className='row live-stream-cards'>
            {liveStreamCards}
            </div>
            <div className='text-center'>
              <PrimaryButton>Go To Profile</PrimaryButton>
            </div>
      </SecondarySectionWrapper>

    </>

  )
}

export default LiveStream