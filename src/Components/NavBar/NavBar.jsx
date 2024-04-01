import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget.jsx"
const NavBar = () => {
    return (
        <nav>
            <h1>Cosmetologia</h1>
            <section>
                <Link to={"/category/Limpiador_Facial"} type="button" class="btn btn-dark">Limpiador facial</Link>
                <Link to={"/category/Agua_Micelar"} type="button" class="btn btn-dark">Agua micelar</Link>
                <Link to={"/category/Crema_Hidratante"} type="button" class="btn btn-dark">Crema hidratante</Link>
            </section>
            <CartWidget/>
        </nav>
    );

}

export default NavBar;