import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="container">
            <img src="" alt="" />
            <ul className="flex">
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Payment</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Cart</Link></li>
            </ul>
            <p className="font-estore font-normal">test font</p>
        </nav>
    )
}

export default Header;
