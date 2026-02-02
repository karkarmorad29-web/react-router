import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './components/pages/About.jsx';
import Home from './components/pages/Home.jsx';
import Products from './components/Products.jsx';
import ProductDetail from './components/ProductDetail.jsx';





function App() {

  console.log("App component rendered");
  //const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
