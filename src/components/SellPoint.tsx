import { SellPointType } from '../types/SellPointsTypes'

const SellPoint = (props: SellPointType) => {
  const { info: data } = props;
  const { adress, phone, email, web, instagram, map } = data
  if (!data) {
    return (
      <>
        <p>Cargando ...</p>
      </>
    );
  } else {
    return (
      <div className="sellPointContainer">
        <h2>{data.shopName}</h2>
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
              <i id="sellPointsIcons" className="far fa-envelope"></i>
            </a>
            <a href={`${web}`}>
              <i id="sellPointsIcons" className="fas fa-globe"></i>
            </a>
            <a href={`${instagram}`}>
              <i id="sellPointsIcons" className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default SellPoint;