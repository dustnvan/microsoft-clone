import './slideshow.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faCircle as solidCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircle as regularCircle,
  faPlayCircle,
  faPauseCircle,
} from '@fortawesome/free-regular-svg-icons';

import largeSlideshow1 from './imgs/largeSlideShow1.jpg';
import largeSlideshow2 from './imgs/largeSlideShow2.jpg';
import mediumSlideshow1 from './imgs/mediumSlideShow1.jpg';
import mediumSlideshow2 from './imgs/mediumSlideShow2.jpg';
import smallSlideShow1 from './imgs/smallSlideShow1.jpg';
import smallSlideShow2 from './imgs/smallSlideShow2.jpg';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const SlideShowText = ({ h2Text, h1Text, pText }) => {
  return (
    <div className="text-wrapper">
      <h2>{h2Text}</h2>
      <h1>{h1Text}</h1>
      <p>{pText}</p>
    </div>
  );
};

const SlideShow1 = ({ className, image }) => {
  return (
    <div className={`slide-show slide-show1 ${className}`}>
      <img src={image} alt="" />
      <div className="slide-show-content">
        <SlideShowText
          h2Text={'Ultimate Game Sale'}
          h1Text={'Save up to 75% on Xbox and PC games'}
          pText={
            'Reach new realms with hot deals on selct titles. Hurry—Ultimate Game Sale ends 7/31.'
          }
        />
        <div className="btns">
          <a href="#" className="blue-btn">
            <div className=" click-box" tabIndex="-1">
              <span>Shop Xbox games</span>
            </div>
          </a>
          <a href="#" className="shop-pc">
            <div className="click-box" tabIndex="-1">
              <span>Shop PC games</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="chevron-right"
              ></FontAwesomeIcon>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const SlideShow2 = ({ className, image }) => {
  return (
    <div className={`slide-show slide-show2 ${className}`}>
      <img src={image} alt="" />
      <div className="slide-show-content">
        <SlideShowText
          h2Text={'Back to School'}
          h1Text={'Save $300 on select Surface Pro 9'}
          pText={
            'On campus and off, Surface Pro 9 with Windows 11 gives you the tablet flexibility you want, and the laptop performance and battery you need to stay ahead of class. Offer ends 7/23.'
          }
        />
        <div className="btns">
          <a href="#" className="blue-btn">
            <div className=" click-box" tabIndex="-1">
              <span>Shop Surface Pro 9</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(true);
  const [dots, setDots] = useState(true);
  const [slideDirection, setSlideDirection] = useState(null);
  const [sliding, setSliding] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(true);
  const [duration, setDuration] = useState(0);

  const mediumImage = useMediaQuery({ maxWidth: 1400 });
  const smallImage = useMediaQuery({ maxWidth: 1100 });

  let slide1Image = largeSlideshow1;
  let slide2Image = largeSlideshow2;

  if (mediumImage) {
    slide1Image = mediumSlideshow1;
    slide2Image = mediumSlideshow2;
    console.log('med');
  }
  if (smallImage) {
    slide1Image = smallSlideShow1;
    slide2Image = smallSlideShow2;

    console.log('small');
  }

  const slideHandler = (slideDir) => {
    if (sliding) return;
    setSliding(true);
    setSlideDirection(slideDir);
    setCurrentSlide((prevSlide) => !prevSlide);
    setDots((prevDot) => !prevDot);

    setTimeout(() => {
      setSliding(false);
    }, 1000);
  };

  // Effect to handle the animation using setInterval
  useEffect(() => {
    let intervalId;

    if (sliding) {
      setDuration(0);
    }

    if (playAnimation) {
      intervalId = setInterval(() => {
        setDuration((prevDuration) => (prevDuration += 1));
      }, 1000);

      if (duration === 10) {
        if (slideDirection !== null) {
          slideHandler(slideDirection);
        }

        setSlideDirection('left');
        setDuration(0);
        setDots((prevDot) => !prevDot);
      }
    }

    // Clean up the interval when the component unmounts or when playAnimation becomes false
    return () => clearInterval(intervalId);
  }, [playAnimation, sliding, duration]);

  return (
    <>
      <div className="slideshow-container">
        <div className="showcase-container">
          {slideDirection === null ? (
            <SlideShow1 image={slide1Image} />
          ) : slideDirection === 'left' ? (
            currentSlide ? (
              <div className="slides-container">
                <SlideShow1
                  className={`slide-${slideDirection} slide-out`}
                  image={slide1Image}
                />{' '}
                <SlideShow2
                  className={`slide-${slideDirection} slide-in`}
                  image={slide2Image}
                />
              </div>
            ) : (
              <div className="slides-container">
                <SlideShow2
                  className={`slide-${slideDirection} slide-out`}
                  image={slide2Image}
                />
                <SlideShow1
                  className={`slide-${slideDirection} slide-in`}
                  image={slide1Image}
                />
              </div>
            )
          ) : currentSlide ? (
            <div className="slides-container">
              <SlideShow2
                className={`slide-${slideDirection} slide-in`}
                image={slide2Image}
              />
              <SlideShow1
                className={`slide-${slideDirection} slide-out`}
                image={slide1Image}
              />
            </div>
          ) : (
            <div className="slides-container">
              <SlideShow1
                className={`slide-${slideDirection} slide-in`}
                image={slide1Image}
              />
              <SlideShow2
                className={`slide-${slideDirection} slide-out`}
                image={slide2Image}
              />
            </div>
          )}
        </div>

        <div className="control-panel">
          <div
            className="play-pause-container click-box"
            tabIndex="-1"
            onClick={() => setPlayAnimation((prevState) => !prevState)}
          >
            {playAnimation ? (
              <FontAwesomeIcon icon={faPauseCircle} className="play-pause" />
            ) : (
              <FontAwesomeIcon icon={faPlayCircle} className="play-pause" />
            )}
          </div>
          <div
            className="chevron-container click-box"
            tabIndex="-1"
            onClick={() => slideHandler('right')}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="control-chevron-left onClick"
            />
          </div>
          <div className="circle-container">
            {dots ? (
              <FontAwesomeIcon icon={solidCircle} className="circle" />
            ) : (
              <FontAwesomeIcon icon={regularCircle} className="circle" />
            )}
          </div>
          <div className="circle-container">
            {dots ? (
              <FontAwesomeIcon icon={regularCircle} className="circle" />
            ) : (
              <FontAwesomeIcon icon={solidCircle} className="circle" />
            )}
          </div>
          <div
            className="chevron-container click-box"
            tabIndex="-1"
            onClick={() => slideHandler('left')}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="control-chevron-right"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
