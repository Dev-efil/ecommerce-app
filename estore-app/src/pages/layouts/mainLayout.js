import { Outlet } from 'react-router';
import FooterComponent from '../../components/shared/footer';
import NavbarComponent from '../../components/shared/navbar';

function MainLayout() {
    return (
        <>
            <NavbarComponent />
            <div className="container">
                <Outlet />
            </div>
            <FooterComponent />
        </>
    )
}

export default MainLayout;
