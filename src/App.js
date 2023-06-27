import './App.css';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <div>
      Welcome to Thrifty! Please visit our shop to find some fantastic deals.
    </div>
  </div>
)

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/fake-shop-api-react/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/shop/:id' element={<ItemDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
