import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DashboardRoutes from './Router';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/*' element={<DashboardRoutes />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
