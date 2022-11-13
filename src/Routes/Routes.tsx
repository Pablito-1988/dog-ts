import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import  Contact  from '../pages/Contact'
import { Main } from '../pages/Main'

export const Routes = () => {
    return (
    
    <>
        <Header />
        <Switch>
            <Route path={'/'} exact component={Main} />
            <Route path={'/contacto'} component={Contact}/>
        </Switch>
        <Footer />
    </>

    )
}
