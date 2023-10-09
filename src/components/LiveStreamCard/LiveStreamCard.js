import './LiveStreamCard.css'

function LiveStreamCard(props) {

  return (
          <div className='col-lg-4'>
            <div className='live-stream-card'>
              <div className='live-stream-card-img'>
                <img src={props.image} />
              </div>
              <div className='live-stream-card-title'>
                <h5>{props.title}</h5>
              </div>
              <div className='live-stream-card-content'>
                <p>{props.content}</p>
              </div>
            </div>
          </div>
  )
}

export default LiveStreamCard