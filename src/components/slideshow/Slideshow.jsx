import './slideshow.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import slideshow1 from './imgs/sllideshow1.avif';
import slideshow2 from './imgs/slideshow2.avif';

const SlideshowContent = () => {
  return (
    <div className='slide-show'>
      <img src={slideshow1} alt="" />

      <div className="text-wrapper">
        <h2>Ultimate Game Sale</h2>
        <h1>Save up to 75% on Xbox and PC games</h1>
        <p>Reach new realms with hot deals on selct titles. Hurry—Ultimate Game Sale ends 7/31.</p>
        <div className="btns">
          <a href='#' className='shop-xbox'><div className='click-box' tabIndex='-1'><span>Shop Xbox games</span></div></a>
          <a href='#' className='shop-pc'><div className='click-box' tabIndex='-1'><span>Shop PC games</span><FontAwesomeIcon icon={faChevronRight} className='chevron-right'></FontAwesomeIcon></div></a>
        </div>
      </div>
    </div >

  );
};

const Slideshow = () => {
  return (
    <div className='slideshow-container'>
      <SlideshowContent />

    </div>

  );
};

export default Slideshow;
