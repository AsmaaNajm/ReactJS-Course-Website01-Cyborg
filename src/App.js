import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import './App.css'

import {Header,Footer} from './sections/index'
import {Home, Profile,Streams,Browse,Details} from './pages/index'
import { Container} from './components/index'

const App=() => {
    return (
        <>
        <Router>
          <Header/>
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/Browse' element={<Browse/>} />
                    <Route path='/details' element={<Details/>} />
                    <Route path='/streams' element={<Streams/>} />
                    <Route path='/profile' element={<Profile/>} />
                </Routes>  
            </Container>
           <Footer/>
        </Router>
        </>
    )
}
export default App