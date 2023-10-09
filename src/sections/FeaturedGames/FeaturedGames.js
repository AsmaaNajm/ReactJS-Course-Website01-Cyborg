import './FeaturedGames.css'

import FeaturedGamesData from '../../data/FeaturedGamesData'

import {CardFeaturedGames, OwlDemo} from '../../components/index'

function FeaturedGames() {
    const FeaturedCards= FeaturedGamesData.map( card=>{
        return <CardFeaturedGames key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
    })

  return (
    <div className='col-lg-8 col-sm-12 featured-games'>
          <OwlDemo>
            {FeaturedCards}
          </OwlDemo>
    </div>
  )
}

export default FeaturedGames