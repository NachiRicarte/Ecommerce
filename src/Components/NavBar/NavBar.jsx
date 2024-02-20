import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <>
            <nav>
                <h3>NINA CLOTHING</h3>
            
                <div>
                    <button>Remeras</button>
                    <button>Pantalones</button>
                    <button>Camperas</button>
                    <button>Carteras</button>
                </div>
            </nav>
            <CartWidget />
        </>
    )
}

export default NavBar