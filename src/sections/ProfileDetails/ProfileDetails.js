import { PrimaryButton, SecondaryButton, SecondarySectionWrapper, SectionHeader, SectionWrapper } from '../../components'
import './ProfileDetails.css'
import UserInfo from '../UserInfo/UserInfo'

function ProfileDetails() {
    return (
        <SectionWrapper>
            <UserInfo></UserInfo>
        
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