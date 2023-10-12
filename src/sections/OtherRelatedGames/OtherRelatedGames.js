import { HorizontalGamesCard, SectionHeader, SectionWrapper } from '../../components'
import './OtherRelatedGames.css'
import popular_08 from '../../assets/images/game-03.jpg'
import RelatedGamesData from '../../data/RelatedGamesData'

function OtherRelatedGames() {

    const RelatedGamesCards=RelatedGamesData.map(card=>{
        return   <HorizontalGamesCard image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>
                   Other Related <span>Games</span> 
                </SectionHeader>
                <div className='row'>
                  {RelatedGamesCards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default OtherRelatedGames