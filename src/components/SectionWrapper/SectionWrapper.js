import './SectionWrapper.css'

const SectionWrapper = (props) => {
  return (
    <div className='section-wrapper'>
      <div className='col-lg-12'>
        {props.children}
      </div>
    </div>
  )
}

export default SectionWrapper