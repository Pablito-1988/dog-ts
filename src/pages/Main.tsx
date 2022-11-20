/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Categories from '../components/Categories'
import { Slider } from '../components/Slider'

export const Main = () => {
  return (
    <>
      <div >
        <Slider />
        <Categories />
      </div>
    </>
  )
}
