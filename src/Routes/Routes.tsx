import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Contact from '../pages/Contact'
import { Main } from '../pages/Main'
import { Products } from '../pages/Products'
import { ProductDetail } from '../pages/ProductDetail'

export const Routes = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path={'/'} exact component={Main} />
                <Route path={'/contacto'} component={Contact} />
                <Route path="/categoria/:categoria" component={Products} />
                <Route path="/producto/:producto" component={ProductDetail} />
            </Switch>
            <Footer />
        </>

    )
}
