import './Image.css'

function Image(props) {
  return (
    <div className='image-section'>
        <img src={props.image} />
    </div>
  )
}

export default Image