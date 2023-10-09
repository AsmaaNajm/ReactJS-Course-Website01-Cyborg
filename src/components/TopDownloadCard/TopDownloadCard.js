import { SecondaryButton } from '../Buttons/Buttons';
import './TopDownloadCard.css'

import { FaStar, FaDownload } from "react-icons/fa";

const TopDownloadCard = (props) => {
    return (
        <div className='top-download-card'>
            <ul>
                <li >
                    <img className='top-download-item-image' src={props.image} />
                </li>
                <li className='top-download-item-content'>
                    <h4>{props.title}</h4>
                    <span>{props.category}</span>
                    <br/>
                    <span style={{ "color": "var(--color-icon-start)" }}><FaStar /></span>{props.rate}
                    <span style={{ "color": "var(--purple)" }}> <FaDownload /> </span>{props.download}
                </li>
                <li>
                <SecondaryButton><FaDownload /> </SecondaryButton>
                </li>
            </ul>
        </div>
    )
}

export default TopDownloadCard