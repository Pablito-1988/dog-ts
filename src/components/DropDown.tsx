
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
    const menuLInks = [
        {
            nombre:'CATALOGO',
            ruta:'/'
        },
        {
            nombre: 'PUNTOS DE VENTA',
            ruta: '/puntos-de-venta'
        },
        {
            nombre: 'CONTACTO',
            ruta: '/contacto'
        },
        
    ]

    return (
        <div className='dropDownContent'>
            {menuLInks.map(e => {
                return (
                    <Link
                        key={e.nombre}
                        to={e.ruta}
                        onClick={props.change}
                        className='navLink' >
                        {e.nombre}
                    </Link>
                )
            })}
            <a
                className='navLink'
                href="https://www.instagram.com/dog.growshop"
                target={"_blank"}
                rel="noreferrer">
                <i className="fab fa-instagram">
                </i>
                INSTAGRAM
            </a>
        </div>
    );
};
export default Dropdown;