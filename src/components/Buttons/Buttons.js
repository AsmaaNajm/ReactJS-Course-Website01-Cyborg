import './Buttons.css'

const Buttons = () => {
  return (
    <div>Button</div>
  )
}

const PrimaryButton = (props) => {
  return (
    <div className='button primary-btn'>
      <a href='#'>
        {props.children}
      </a>
    </div>
  )
}

const SecondaryButton = (props) => {
  return (
    <div className='button secondary-btn col-lg-2'>
      <a href='#'>
        {props.children}
      </a>
    </div>
  )
}

export default PrimaryButton
export { SecondaryButton }