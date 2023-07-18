import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import microsoftLogo from './imgs/microsoft-logo.png';
import signinLogo from './imgs/signin-logo.svg';


const Header = () => {
  return (
    <>
      <header className="header">
        <div className='header_navbar'>
          <div className="header_navbar_icon">
            <img src={microsoftLogo} alt="Microsoft Image" />
          </div>

          <ul className="header_navbar_pages">
            <li><a href="#">Microsoft 365</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Windows</a></li>
            <li><a href="#">Surface</a></li>
            <li><a href="#">Xbox</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">Small Business</a></li>
            <li><a href="#">Support</a></li>
            {/* <li><a href="#">More <FontAwesomeIcon icon={faChevronDown} /></a></li> */}
          </ul>

          <ul className="header_navbar_user">
            <li><a href="#">All Microsoft <FontAwesomeIcon icon={faChevronDown} /></a></li>
            <li><a href="#">Search <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-flip-horizontal' /></a></li>
            <li><a href="#">Cart <FontAwesomeIcon icon={faShoppingCart} /></a></li>
            <li>
              <a href="#" className='header_navbar_user_signin'>
                Sign in <img className='sign-in-icon' src={signinLogo} />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <header className="sub-header">

      </header>
    </>
  );
};

export default Header;