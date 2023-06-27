import {useState, useEffect} from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  });

function ItemDetail() {
  let dispatch = useDispatch()
  const params  = useParams()

  function add() {
    if (params.id)
    {
    dispatch({type: "added", payload: {title: item.title, price: item.price}});
    }
  }

    useEffect(() => {
        fetchItemDetail();
    }, []);

    const [item, setItem] = useState({});

    const fetchItemDetail = async () => {
      try {
        const itemFetch = await fetch(
            `https://fakestoreapi.com/products/
            ${
            params.id
            }`
        );
        const item = await itemFetch.json();
        setItem(item);
          } catch(error) {
            setItem(null)
          }
    } 

  return (
    <>
    {(item) && <div>
      {!item.image && <div style={{height: '300px'}}></div>}
      {item.image && <img width="300" height="300" src={item.image} alt="item closeup"/>}
      <div className="fullinfo">
      <h1>{item.title}</h1>
      {item.price && <h2 className="itemprice">{formatter.format(item.price)}</h2>}
      <h3 className="desc">{item.description}...</h3>
      <button onClick={() => add()}>Add to cart!</button>
      </div>
    </div>}
    {!(item) && <h1>API call failed, please refresh</h1>}
    </>
  );
}

export default ItemDetail;