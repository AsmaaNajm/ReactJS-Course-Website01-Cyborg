import './UserInfo.css'

import stream_08 from '../../assets/images/profile.jpg'
import { PrimaryButton, SecondaryButton, UserGameCard } from '../../components'
function UserInfo() {
    return (
        <>
            <div className='row col-lg-12'>
                <div className='col-lg-4'>
                    <img className="banner-image" src={stream_08} />
                </div>
                <div className='col-lg-4 main-profile'>
                    <PrimaryButton>Offline</PrimaryButton>
                    <h1 className='m-2'>Alan Smithee</h1>
                    <h6 className='m-2'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</h6>
                    <SecondaryButton>Start Live Stream</SecondaryButton>
                </div>
                <UserGameCard></UserGameCard>
            </div>
        </>
    )
}

export default UserInfo