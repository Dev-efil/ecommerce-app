import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="#">Hidden brand</Link>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="payment">Payment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="cart" aria-disabled="true">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="product-inner" aria-disabled="true">Product Inner</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="wishlist" aria-disabled="true">Wish List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="register" aria-disabled="true">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login" aria-disabled="true">Login</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="nav-icon">
                            <img className="search" src={require("../../assets/image/icon/search.png")} alt=""/>
                        </div>
                        <div className="nav-icon">
                            <img className="bag" src={require("../../assets/image/icon/bag.png")} alt=""/>
                        </div>
                        <div className="nav-icon">
                            <img className="account" src={require("../../assets/image/icon/account.png")} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
