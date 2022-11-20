import React from 'react'
import { SellPointType } from '../types/SellPointsTypes'

const SellPoint: React.FC<SellPointType> = (props: SellPointType) => {
  const { info: data } = props
  const { adress, phone, email, web, instagram, map, shopName } = data

  return (
    <div className="sellPointContainer">
      <h2 className='selPointName'>{shopName}</h2>
      <a
        href="https://goo.gl/maps/h35yZF3RWbr6UsFv7"
        target="_blank"
        rel="noreferrer"
      >
        <img className="locationMap" src={map.url} alt="" />
      </a>
      <div className="sellPointData">
        <p className="sellPointAdress">{adress}</p>
        <p className="sellPointPhone">Tel: {phone}</p>

        <div className="sellPointSocial">
          <a href={`mailto: ${email} `}>
            <i id="sellPointsIconEmail" className="far fa-envelope"></i>
          </a>
          <a href={`${instagram}`}>
            <i id="sellPointsIconInstagram" className="fab fa-instagram"></i>
          </a>
          <a href={`${web}`}>
            <i id="sellPointsIconWeb" className="fas fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SellPoint
