import './FeaturedGames.css'

import FeaturedGamesData from '../../data/FeaturedGamesData'

import {CardFeaturedGames, OwlDemo, SectionHeader} from '../../components/index'

function FeaturedGames(props) {
    const FeaturedCards= FeaturedGamesData.map( card=>{
        return <CardFeaturedGames key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
    })

  return (
    <>
    <div className='col-lg-8 col-sm-12 featured-games'>
          <SectionHeader>
             {props.title}
          </SectionHeader>
          <OwlDemo>
            {FeaturedCards}
          </OwlDemo>
    </div>
    </>
  )
}

export default FeaturedGames