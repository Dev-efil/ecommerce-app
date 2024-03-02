import React from 'react';
import { Outlet } from 'react-router';
import FooterComponent from '../../components/shared/footer';
import HeaderComponent from '../../components/shared/header';

function MainLayout() {
    return (
        <>
            <HeaderComponent />
            <main>
                <Outlet />
            </main>
            <FooterComponent />
        </>
    )
}

export default MainLayout;
