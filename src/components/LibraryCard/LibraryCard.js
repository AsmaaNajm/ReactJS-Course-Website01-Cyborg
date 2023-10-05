import { SecondaryButton } from '../Buttons/Buttons';
import './LibraryCard.css'

import { FaStar, FaDownload } from "react-icons/fa";

const LibraryCard = (props) => {
    return (
        <div className='library-gaming-card'>
            <ul className='row'>
                <li className='col-lg-2'>
                    <img className='library-gaming-item-image ' src={props.image} />
                </li>
                <li className='col-lg-2'>
                    <h4>{props.title}</h4><span>{props.category}</span>
                </li>
                <li className='col-lg-2'>
                <h4>Date Added</h4> <span> {props.date_added}</span>
                </li >
                <li className='col-lg-2'>
                <h4>Hours Played</h4> <span> {props.hour_played}</span>
                </li>
                <li className='col-lg-2'>
                    <h4>Currently</h4> <span> {props.download}</span>
                </li>
                <SecondaryButton>Download</SecondaryButton>
            </ul>
        </div>
    )
}

export default LibraryCard