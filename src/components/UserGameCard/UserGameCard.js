import { SecondaryButton } from '../Buttons/Buttons';
import './UserGameCard.css'

import { FaStar, FaDownload } from "react-icons/fa";

const TopDownloadCard = (props) => {
    return (
        <div className='col-lg-4 main-profile '>
            <div className='list'>

                <ul>
                    <li>
                        Games Downloaded
                        <span>14</span>
                    </li>
                    <li>
                        Friends Online
                        <span>11</span>
                    </li>
                    <li >
                        Live Streams
                        <span>3</span>
                    </li>
                    <li>
                        Clips
                        <span>21</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default TopDownloadCard