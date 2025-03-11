import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';

const HomePage: React.FC = () => {
  const location = useLocation();
  const isProductDetailPage = location.pathname.includes('/products/');
  
  return (
    <div className="container mx-auto p-4">
      <header className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">React Shop Product Viewer</h1>
      </header>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className={`w-full ${isProductDetailPage ? 'md:w-7/12 lg:w-8/12' : 'md:w-full'}`}>
          <Outlet />
        </div>
        
        {isProductDetailPage && (
          <div className="w-full md:w-5/12 lg:w-4/12">
            <ProductList />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
