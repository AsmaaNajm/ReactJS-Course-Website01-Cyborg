import { SecondaryButton } from '../Buttons/Buttons';
import './TopDownloadCard.css'

import { FaStar, FaDownload } from "react-icons/fa";

const TopDownloadCard = (props) => {
    return (
        <div className='top-download-card'>
            <ul>
                <li>
                    <img className='top-download-item-image' src={props.image} />
                </li>
                <li >
                    <ul>
                        <h4>{props.title}</h4>
                    </ul>
                    <ul >
                        <span>{props.category}</span>
                    </ul>
                    <ul>
                        <span style={{ "color": "var(--color-icon-start)" }}><FaStar /></span>{props.rate}
                        
                        <span style={{ "color": "var(--purple)" }}> <FaDownload /> </span>{props.download}
                    </ul>
                </li>
                <li>
                    <SecondaryButton> <FaDownload /> </SecondaryButton>
                </li>
            </ul>
        </div>
    )
}

export default TopDownloadCard