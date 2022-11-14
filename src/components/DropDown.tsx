
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
    const menuLInks = ['CATALOGO', 'EDU', 'PUNTOS DE VENTA', 'CONTACTO', 'NOSOTROS']

    return (
        <div className='dropDownContent'>
            {menuLInks.map(e => {
                return (
                    <Link key={e} onClick={props.change} className='navLink' to="/catalogo">{e}</Link>
                )
            })}
            <a className='navLink' href="https://www.instagram.com/dog.growshop" target={"_blank"} rel="noreferrer"><i className="fab fa-instagram"></i> INSTAGRAM</a>
        </div>
    );
};
export default Dropdown;