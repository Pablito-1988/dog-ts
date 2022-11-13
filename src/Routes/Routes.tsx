import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const Routes = () => {
  return (
    <Switch>
        <Header/>
        
        <Footer/>
    </Switch>
  )
}
