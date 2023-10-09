import './SecondarySectionWrapper.css'

const SecondarySectionWrapper = (props) => {
  return (
    <div className='secondary-section-wrapper'>
      <div className='col-lg-12 row'>
        {props.children}
      </div>
    </div>
  )
}

export default SecondarySectionWrapper