import Navbar from './components/NavBar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Lumilagro from './pages/Lumilagro'
import Peabody from './pages/Peabody'
import Stanley from './pages/Stanley'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/brand/:brandId' element={<ItemListContainer />} />
        <Route path='/detail/:itemId' element={<ProductDetailContainer />} />
        <Route path='/*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
