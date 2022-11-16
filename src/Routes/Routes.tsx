
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Contact from '../pages/Contact'
import { Main } from '../pages/Main'
import { Products } from '../pages/Products'
import { ProductDetail } from '../pages/ProductDetail'
import { SellPonits } from '../pages/SellPonits'
import '../styles/MainStyle.css'

export const Routes: React.FC = () => {
  return (
        <div className='mainWrapper'>
            <Header />
            <Switch>
                <Route path={'/'} exact component={Main} />
                <Route path={'/contacto'} component={Contact} />
                <Route path="/categoria/:categoria" component={Products} />
                <Route path="/producto/:producto" component={ProductDetail} />
                <Route path={'/puntos-de-venta'} component={SellPonits} />
            </Switch>
            <Footer />
        </div>

  )
}
