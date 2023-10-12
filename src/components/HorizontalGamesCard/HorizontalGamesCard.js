
import { FaStar,FaDownload } from "react-icons/fa";
import './HorizontalGamesCard.css'

function HorizontalGamesCard(props) {
    return (
        <>
         <div className="col-lg-6">
            <div className='horizontal-games-card '>
                <img src={props.image} />
                <h5>{props.title}</h5>
                <span>{props.category}</span>
                <ul >
                    <li>
                        <span style={{ "color": "var(--color-icon-start)" }}><FaStar /></span>{props.rate}
                    </li>
                    <li>
                        <span style={{ "color": "var(--purple)" }}> <FaDownload /> </span>{props.download}
                    </li>
                </ul>
            </div>
         </div>
        </>
    )
}

export default HorizontalGamesCard