
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

import './index.css';

function App() {
  return (

    <div className="App" >
      <NavBar />
      <div className='cart-container'>
      <ItemListContainer texto="Productos" className='producto-container'/>
      </div>
      <div>
     

      </div>
    </div>
  );
}

export default App;


