import React from 'react'
import { useQuery } from 'react-query'
import { getSliderImg } from '../api/sliderApi'
import { useEffect, useState } from "react";
import '../styles/SliderStyles.css'

export const Slider = () => {
  const { data,
    isLoading,
  } = useQuery(["slider"], getSliderImg)

  const [slideIndex, setSlideIndex] = useState(1);
  const [sliderTime, setSliderTime] = useState(5000);

  const moveDot = (index) => {
    setSlideIndex(index);
    setSliderTime(5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex === data.length
        ? setSlideIndex(1)
        : setSlideIndex(slideIndex + 1);
    }, sliderTime);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="sliderContainer">
        <div className="slider">
          {!isLoading ? (
            <>
              <ul>
                {data.map((image, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        slideIndex === index + 1 ? "slide active-anim" : ''
                      }

                    >
                      <img
                        src={image.sliderImg.url}
                        alt="Dog Grow"
                        className="logoImg"
                        key={index}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="container-dots">
                {data.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                  ></div>
                ))}
              </div>
            </>

          ) : (
            <p>Cargando</p>
          )}
        </div>

      </div>
    </>
  )
}
