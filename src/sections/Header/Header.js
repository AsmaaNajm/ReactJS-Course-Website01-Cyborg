import './Header.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import NavItem,{NavItemDropDown} from '../../components/NavItem/NavItem'

const Header = (props) => {
  return (
    <div className="navbar navbar-expand-md bg-dark navbar-dark text-white cyb-navbar">
        <div className="container">
              <a href="/" className="navbar-brand">
                <img  src={logo} alt=""/>
              </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                  <NavItem>
                    <Link to='/' className="nav-link" >Home </Link>
                  </NavItem>
                  <NavItem>
                  <a href="#features" className="nav-link">Features</a>
                    </NavItem>
                    <NavItemDropDown>
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Learn</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="#next" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </NavItemDropDown>
                    <NavItem>
                    <a href="#faq" className="nav-link">Ask Me</a>
                    </NavItem>
                    <NavItem>
                     <Link to='/profile' className="nav-link" >Profile </Link>
                    </NavItem>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header