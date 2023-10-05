import { SecondaryButton } from '../Buttons/Buttons';
import './LibraryCard.css'

import { FaStar, FaDownload } from "react-icons/fa";

const LibraryCard = (props) => {
    return (
        <div className='library-gaming-card'>
            <ul>
                <li>
                    <img className='library-gaming-item-image ' src={props.image} />
                </li>
                <li>
                    <h4>{props.title}</h4><span>{props.category}</span>
                </li>
                <li>
                <h4>Date Added</h4> <span> {props.date_added}</span>
                </li>
                <li>
                <h4>Hours Played</h4> <span> {props.hour_played}</span>
                </li>
                <li>
                    <h4>Currently</h4> <span> {props.download}</span>
                </li>
                <SecondaryButton>Download</SecondaryButton>
            </ul>
        </div>
    )
}

export default LibraryCard