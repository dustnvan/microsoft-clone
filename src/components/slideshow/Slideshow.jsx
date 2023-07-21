import './slideshow.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle as solidCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regularCircle, faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';

import slideshow1 from './imgs/sllideshow1.avif';
import slideshow2 from './imgs/slideshow2.avif';
import React from 'react';

const SlideShowText = ({ h2Text, h1Text, pText }) => {
  return (
    <div className='text-wrapper'>
      <div className="text-wrapper">
        <h2>{h2Text}</h2>
        <h1>{h1Text}</h1>
        <p>{pText}</p>
      </div>
    </div >
  );
};

const SlideShow1 = () => {
  return (
    <div className='slide-show slide-show1'>
      <img src={slideshow1} alt="" />
      <div className="slide-show-content">
        <SlideShowText h2Text={'Ultimate Game Sale'} h1Text={'Save up to 75% on Xbox and PC games'} pText={'Reach new realms with hot deals on selct titles. Hurry—Ultimate Game Sale ends 7/31.'} />
        <div className="btns">
          <a href='#' className='blue-btn'><div className=' click-box' tabIndex='-1'><span>Shop Xbox games</span></div></a>
          <a href='#' className='shop-pc'><div className='click-box' tabIndex='-1'><span>Shop PC games</span><FontAwesomeIcon icon={faChevronRight} className='chevron-right'></FontAwesomeIcon></div></a>
        </div>
      </div >
    </div >
  );
};

const SlideShow2 = () => {
  return (
    <div className='slide-show slide-show2'>
      <img src={slideshow2} alt="" />
      <div className="slide-show-content">
        <SlideShowText h2Text={'Back to School'} h1Text={'Save $300 on select Surface Pro 9'} pText={'On campus and off, Surface Pro 9 with Windows 11 gives you the tablet flexibility you want, and the laptop performance and battery you need to stay ahead of class. Offer ends 7/23.'} />
        <div className="btns">
          <a href='#' className='blue-btn'><div className=' click-box' tabIndex='-1'><span>Shop Surface Pro 9</span></div></a>
        </div>
      </div >
    </div >
  );
};

const Slideshow = () => {
  return (
    <>
      <div className='slideshow-container'>
        <SlideShow2 />
        <div className='control-panel'>
          <FontAwesomeIcon icon={faPauseCircle} className='play-pause' />
          <FontAwesomeIcon icon={faChevronLeft} className='chevron' />
          <FontAwesomeIcon icon={regularCircle} className='circle' />
          <FontAwesomeIcon icon={regularCircle} className='circle' />
          <FontAwesomeIcon icon={faChevronRight} className='chevron' />
        </div>
      </div>


    </>

  );
};

export default Slideshow;
