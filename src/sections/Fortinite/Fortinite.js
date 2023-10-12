import './Fortinite.css'
import { HorizontalGamesCard, LibraryCard, SecondaryButton, SecondarySectionWrapper, SectionHeader, SectionWrapper, TopDownloadCard } from '../../components'

import popular_08 from '../../assets/images/game-01.jpg'
import OtherRelatedGames from '../OtherRelatedGames/OtherRelatedGames'

function Fortinite() {
    return (
        <>
            <SectionHeader>
              FORTNITE DETAILS
            </SectionHeader>
            <SectionWrapper>
                <div className='row fortnite-first-section'>
                    {/* <div className='col-lg-6'> */}
                        <HorizontalGamesCard  title="Fortnite" category="Sandbox" rate="4.8" download="2.4M" />
                        
                        <HorizontalGamesCard  title="Fortnite" category="Sandbox" rate="4.8" download="2.4M" />
                       
                    {/* </div> */}
                    {/* <div className='col-lg-6 '>
                       <div className='fortnite-card'>
                        fgdfg
                        </div>
                    </div> */}
                </div>
                <div className='row fortnite-gallery-section'>
                    <div className='col-lg-4'>
                        <img className="banner-image" src={popular_08} />
                    </div>
                    <div className='col-lg-4'>
                        <img className="banner-image" src={popular_08} />
                    </div>
                    <div className='col-lg-4'>
                        <img className="banner-image" src={popular_08} />
                    </div>
                </div>
                <div className='row fortnite-text-section'>
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                </div>
                <div className='row'>
                    <SecondaryButton>Download  Fortinite Now!</SecondaryButton>
                </div>
               
            </SectionWrapper>
            <OtherRelatedGames/>
        </>
    )
}

export default Fortinite