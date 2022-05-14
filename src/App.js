
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'

import Home from './views/Home/home'
import About from './views/About/about'
import Contact from './views/Contact/contact'

import './index.css';

function App() {
  return (
    <Router>
      <div className="App" >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <div className='cart-container'>

        </div>
        <div>


        </div>
      </div>
    </Router>
   
  );
}

export default App;


