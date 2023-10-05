import './GamingLibrary.css'

import GamingLibraryData from '../..//data/GamingLibraryData'

import {LibraryCard, SectionHeader, SectionWrapper} from '../../components/index'

const GamingLibrary = () => {

  const LibraryCards= GamingLibraryData.map( card=>{
    return <LibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hour_palyed={card.hour_palyed} download={card.download} />
  })
  return (
    <>
    <SectionWrapper>
       <SectionHeader>Gaming Library</SectionHeader>
        <div className='gaming-library-cards'>
          {LibraryCards}
        </div>
      </SectionWrapper>
    </>
  )
}

export default GamingLibrary