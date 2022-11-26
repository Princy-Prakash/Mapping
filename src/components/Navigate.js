import React from 'react'
import Products from '../pages/Products'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductDetail from '../pages/ProductDetail';

const Navigate = () => {
  return (
    <Router>
    <div>
    <Routes>
                      <Route exact path="/" element={<Products />}></Route>
                      <Route  path="/:name" element={ <ProductDetail />}></Route> 
    </Routes>

    </div>
    </Router>
  )
}

export default Navigate
