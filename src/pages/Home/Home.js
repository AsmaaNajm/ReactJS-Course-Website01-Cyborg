import './Home.css'

import {Hero,MostPopular,GamingLibrary} from '../../sections/index'

const Home = () => {
  return (
   <>
    <div className='row'>   
      <h1>Home Page</h1>
      <Hero/>
      <MostPopular/>
      <GamingLibrary/>
    </div>
   </>
  )
}

export default Home