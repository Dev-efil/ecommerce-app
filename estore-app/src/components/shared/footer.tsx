import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <p className="mb-0">© 2022 Company, Inc</p>

            <Link to="/" className="flex items-center justify-center mb-3 mb-md-0 me-md-auto no-underline">
                
            </Link>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Payment</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Cart</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;
