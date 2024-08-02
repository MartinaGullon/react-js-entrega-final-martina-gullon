import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import { CartProvider } from './context/cartcontext';
import Carrito from './components/carrito/carrito';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';
import ItemDetailContainer from './components/itemdetailcontainer/itemdetailcontailner';
import Checkout from './components/checkout/checkout'

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path='/product/:category' element={<ItemListContainer />} />
                    <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;