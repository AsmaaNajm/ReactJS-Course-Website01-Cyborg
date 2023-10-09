import { SecondarySectionWrapper } from '../../components'
import './BannerDetails.css'

import { FaPlay,FaPlayCircle } from "react-icons/fa";
import popular_08 from '../../assets/images/popular-08.jpg'

function BannerDetails() {
  return (
    <>
        <SecondarySectionWrapper>
            <div className='col-lg-4'>
                <img className="banner-image" src={popular_08} />
            </div>
            <div className='col-lg-8 banner-video'>
                {/* <img  src={popular_08} /> */}
                <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank" style={{ "color":"var(--purple)" }} >
                    <FaPlayCircle/>
                </a>
            </div>
        </SecondarySectionWrapper>
    </>
  )
}

export default BannerDetails