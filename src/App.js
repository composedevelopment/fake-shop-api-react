import './App.css';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fake-shop-api-react/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
