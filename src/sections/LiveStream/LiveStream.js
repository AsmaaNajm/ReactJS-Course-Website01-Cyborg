import { LiveStreamCard, PrimaryButton, SectionHeader, SectionWrapper } from '../../components'
import './LiveStream.css'
import LiveStreamData from '../../data/LiveStreamData'

function LiveStream() {
  const liveStreamCards=LiveStreamData.map( card=>{
      return <LiveStreamCard image={card.image} title={card.title} content={card.content} />
  })
  return (
    <>
      <div className='wrapper-section'>
        <div className='col-lg-12'>
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
          </div>
      </div>

    </>

  )
}

export default LiveStream