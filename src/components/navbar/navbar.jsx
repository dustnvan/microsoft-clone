import './navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlass, faShoppingCart, faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons';
import microsoftLogo from './imgs/microsoft-logo.png';
import signinLogo from './imgs/signin-logo.svg';

import { useMediaQuery } from 'react-responsive';

const NavbarDesktop = () => {
  return (
    <div className='header_navbar'>
      <a href='index.html' className="header_navbar_icon click-box">
        <img src={microsoftLogo} alt="Microsoft Image" />
      </a>

      <ul className="header_navbar_pages">
        <li tabIndex='-1' className='nav-btn click-box'><a href="#" className='underline-hover' >Microsoft 365</a></li>
        <li tabIndex='-1' className='nav-btn click-box'><a href="#" className='underline-hover'>Teams</a></li>
        <li tabIndex='-1' className='nav-btn click-box'><a href="#" className='underline-hover'>Windows</a></li>
        <li tabIndex='-1' className='nav-btn click-box'><a href="#" className='underline-hover'>Surface</a></li>
        <li tabIndex='-1' className='nav-btn click-box xbox-btn'><a href="#" className='underline-hover'>Xbox</a></li>
        <li tabIndex='-1' className='nav-btn click-box deals-btn'><a href="#" className='underline-hover'>Deals</a></li>
        <li tabIndex='-1' className='nav-btn click-box business-btn'><a href="#" className='underline-hover '>Small Business</a></li>
        <li tabIndex='-1' className='nav-btn click-box support-btn'><a href="#" className='underline-hover '>Support</a></li>
        <li className='nav-btn click-box more-btn'><a href="#">More <FontAwesomeIcon icon={faChevronDown} /></a></li>
      </ul>

      <ul className="header_navbar_user">
        <li tabIndex='-1' className='nav-btn click-box microsoft-btn'><a href="#"><span className="underline-hover microsoft-text">All Microsoft</span><FontAwesomeIcon icon={faChevronDown} /></a></li>
        <li tabIndex='-1' className='nav-btn click-box'><a href="#"><span className="underline-hover search-text">Search</span> <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-flip-horizontal' /></a></li>
        <li tabIndex='-1' className='nav-btn click-box cart-btn'><a href="#"><span className="underline-hover cart-text">Cart</span> <FontAwesomeIcon icon={faShoppingCart} /></a></li>
        <li tabIndex='-1' className='nav-btn click-box header_navbar_user_signin'>
          <a href="#">
            <span className="signin-text">Sign in</span> <img className='signin-icon' src={signinLogo} />
          </a>
        </li>
      </ul>
    </div>
  );
};

const NavbarMobile = () => {
  return (
    <div className='header_navbar_mobile' >
      <div>
        <a href="#" className="click-box">
          <FontAwesomeIcon icon={faBars} />
        </a>
        <a href="#" className="click-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
      </div>

      <a href='index.html' className="header_navbar_icon click-box">
        <img src={microsoftLogo} alt="Microsoft Image" />
      </a>

      <div>
        <a href="#" className='click-box'><FontAwesomeIcon icon={faShoppingCart} /></a>
        <a href="#" className='click-box'><img className='signin-icon' src={signinLogo} /></a>
      </div>

    </div>

  );
};

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 860 });

  return (
    <>

      <header className="header">
        {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      </header>

      <header className="sub-header">
        <a href='#'><div className='click-box' tabIndex='-1'><span>Get set for the semester with deals on tech essentials, plus flexible payment options starting at 0% APR. Shop student deals</span><FontAwesomeIcon icon={faChevronRight} className='chevron-right'></FontAwesomeIcon></div>
        </a>
      </header>
    </>
  );
};

export default Header;

