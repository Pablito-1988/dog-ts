/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getSliderImg } from '../api/sliderApi'

import '../styles/SliderStyles.css'

export const Slider: React.FC = () => {
  const {
    data,
    isLoading
  } = useQuery(['slider'], getSliderImg)

  const [slideIndex, setSlideIndex] = useState<number>(1)
  const [sliderTime, setSliderTime] = useState<number>(5000)

  const moveDot = (index): void => {
    setSlideIndex(Number(index))
    setSliderTime(5000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex === data.length
        ? setSlideIndex(1)
        : setSlideIndex(slideIndex + 1)
    }, sliderTime)
    return () => clearInterval(interval)
  })

  return (
    <>
      <div className="sliderContainer">
        <div className="slider">
          {!isLoading
            ? (
              <>
                <ul>
                  {data.map((image, index: number) => {
                    return (
                      <li
                        key={index}
                        className={
                          slideIndex === index + 1 ? 'slide active-anim' : ''
                        }

                      >
                        <img
                          src={image.sliderImg.url}
                          alt="Dog Grow"
                          className="logoImg"
                          key={index}
                        />
                      </li>
                    )
                  })}
                </ul>
                <div className="container-dots">
                  {data.map((item, index: number) => (
                    <div
                      key={index}
                      onClick={() => moveDot(index + 1)}
                      className={slideIndex === index + 1 ? 'dot active' : 'dot'}
                    ></div>
                  ))}
                </div>
              </>

            )
            : (
              <p>Cargando</p>
            )}
        </div>

      </div>
    </>
  )
}
