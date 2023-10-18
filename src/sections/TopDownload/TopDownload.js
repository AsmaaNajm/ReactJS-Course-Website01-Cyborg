import {  PrimaryButton, SectionHeader, TopDownloadCard } from '../../components'
import TopDownloadData from '../../data/TopDownloadData'
import './TopDownload.css'

function TopDownload(props) {


  const TopDownloadCards=TopDownloadData.map(card=> {
      return <TopDownloadCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
  })

  return (
    <div className='col-lg-4 col-sm-12'>
        <div className='top-download '>
          <SectionHeader>
              {props.title}
          </SectionHeader>
           {TopDownloadCards}
           <PrimaryButton>All Games</PrimaryButton>
        </div>
    </div>
    
  )
}

export default TopDownload