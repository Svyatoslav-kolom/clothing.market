import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { App } from './App';
import { MainPage } from './components/Pages/MainPage';
import { CatalogPage } from './components/Pages/CatalogPage';
import { ProductDetailsPage } from './components/Pages/ProductDetailsPage';
import { CartPage } from './components/Pages/CartPage';
import { NotFoundPage } from './components/Pages/NotFoundPage';
import { FavouritePage } from './components/Pages/FavouritePage';

export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route
            path="catalog/:itemId"
            element={<ProductDetailsPage />}
          />
          <Route path="favourites" element={<FavouritePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
