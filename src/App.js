import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './components/products/products';
import Card from './components/Card';
import Boxes from './components/products/Boxes';
import Cart from './components/Cart';

function App() {
  return (
      <div className='bg-pink-200 '>
          <Router>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/boxes' element={<Boxes/>}/>
                  <Route path='/products' element={<Products/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/product/:id' element={<Card/>}/>

              </Routes>
          </Router>
      </div>
  );
}

export default App;
