import { Outlet } from 'react-router';
import FooterComponent from '../../components/shared/footer';
import NavbarComponent from '../../components/shared/navbar';

function MainLayout() {
    return (
        <>
            <NavbarComponent />
            <main>
                <Outlet />
            </main>
            <FooterComponent />
        </>
    )
}

export default MainLayout;
