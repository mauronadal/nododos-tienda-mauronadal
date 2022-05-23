
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/home'
import About from './views/About/about'
import Contact from './views/Contact/contact'
import './index.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CardContext';





function App() {
  return (
  <CartProvider>
    <Router>
      <div className="App" >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/categoria/:categoriaId' element={<Home />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        </Routes>

        <div className='cart-container'>

        </div>
        <div>


        </div>
      </div>
    </Router>
 </CartProvider>
   
  );
}

export default App;


