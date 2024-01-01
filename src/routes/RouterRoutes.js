import React from 'react';
import { Routes, Route } from 'react-router';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';

const RouterRoutes = () => {

    

    return (
        <>
           <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;