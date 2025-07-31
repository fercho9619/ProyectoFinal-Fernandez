import { Routes, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/cart/Cart'; // ← CAMBIADO

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/categoria/:categoryId" element={<Category />} />
        <Route path="/detalle/:productId" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<h2 style={{ padding: "2rem" }}>Página no encontrada</h2>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
