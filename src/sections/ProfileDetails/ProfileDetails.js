import { PrimaryButton, SecondaryButton, SecondarySectionWrapper, SectionHeader, SectionWrapper } from '../../components'
import './ProfileDetails.css'
import stream_08 from '../../assets/images/profile.jpg'

function ProfileDetails() {
    return (
        <SectionWrapper>
            <div className='row col-lg-12'>
                <div className='col-lg-4'>
                    <img className="banner-image" src={stream_08} />
                </div>
                <div className='col-lg-4 main-profile'>
                    <PrimaryButton>Offline</PrimaryButton>
                    <h1>Alan Smithee</h1>
                    <h6>You Haven't Gone Live yet. Go Live By Touching The Button Below.</h6>
                    <SecondaryButton>Start Live Stream</SecondaryButton>
                </div>
                <div className='col-lg-4 main-profile '>
                    <div className='list'>

                    <ul>
                        <li>
                        Games Downloaded
                            <span>3</span>
                        </li>
                        <li>
                        Friends Online
                            <span>3</span>
                        </li>
                        <li >
                        Live Streams
                            <span>3</span>
                        </li>
                        <li >
                        Clips
                            <span>3</span>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </div>
            <br></br>
            <div className='row col-lg-12 your-popular-clips'>
                <SectionHeader>
                    Your Most Popular Clips
                </SectionHeader>
            </div>
        </SectionWrapper>
    )
}

export default ProfileDetails