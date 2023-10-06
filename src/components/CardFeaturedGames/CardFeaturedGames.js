import { FaDownload, FaStar } from 'react-icons/fa'
import './CardFeaturedGames.css'

function CardFeaturedGames(props) {
  return (
    <div className='card-featured-item'>
        <div className='card-wrapper'>
            <img className='card-featured-image' src={props.image} />
            <div className='card-featured-item-content'>
                <h4 className='card-featured-item-title'>
                    {props.title}<br/>
                    <span>{props.category}</span>
                </h4>
                <ul>
                    <li>
                     <span style={{ "color" :"var(--color-icon-start)" }}><FaStar/></span>{props.rate}
                    </li>
                    <li>
                    <span style={{ "color" :"var(--purple)" }}> <FaDownload/> </span>{props.download}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CardFeaturedGames