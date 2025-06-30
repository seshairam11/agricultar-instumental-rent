import React, { lazy, Suspense } from 'react'
import { OPLoader } from './ComponentOP/OPLoader';
import { useSelector } from 'react-redux';
import Error404 from './PagesOP/Error404';
import Aboutus from './PagesOP/Aboutus';
import { Home } from './PagesOP/Home';
import { Search } from './PagesOP/Search';
import { Profile } from './PagesOP/Profile';
import ProductPage from './PagesOP/ProductPage';
import Invoice from './PagesOP/Invoice.';
import { AddProduct } from './PagesOP/AddProduct';
import EditDiscount from './PagesOP/EditDiscount';
import { Subscription } from './PagesOP/Subscription';



export const OPRoutes = () => {
    const getAppStoreData = useSelector((state) => state.appstate.login_info);
    return [
        {
            path: "/",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <Home />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/about-us",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <Aboutus />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/search",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <Search />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/profile",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <Profile />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/search/product-details",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <ProductPage />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/invoice",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <Invoice />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/subscription",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <Subscription />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/add-product",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <AddProduct />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/edit-discount",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <EditDiscount />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "*",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <Error404 />
                </Suspense>
            ),
            isloggedin: false,
        },

    ]
}
