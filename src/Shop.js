import {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
    
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const newitems = await data.json();
        setItems(newitems.slice(0,18));
      } catch(error) {
        setItems("failed")
      }
    }
    
let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    });

  return (
    <>
    <h1>Shop</h1>
    {(typeof items === 'string') && <h2>API call failed, please refresh</h2>}
    {(typeof items !== 'string') && <div className="grid">
      {items.map(itemMap => (
        <div className="shopitem" key={itemMap.id}>
          <Link to={`/shop/${itemMap.id}`}>
            <img width="200" height="200" src={itemMap.image} alt="item"/>
            <h4 className="itemprice">{formatter.format(itemMap.price)}</h4>  
            <h4 className="itemname">{itemMap.title}</h4>
          </Link>
        </div>
    ))}
  </div>}
  </>
  );
}

export default Shop;