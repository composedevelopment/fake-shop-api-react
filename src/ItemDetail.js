import {useState, useEffect} from 'react';
import './App.css';
import { useDispatch } from 'react-redux';

function ItemDetail({match}) {
  let dispatch = useDispatch()

  function add() {
    if (match.params.id)
    {
    dispatch({type: "added", payload: item.title});
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
            match.params.id
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
      <img width="300" height="300" src={item.image} alt="item closeup"/>
      <div className="fullinfo">
      <h1>{item.title}</h1>
      <h3 className="desc">{item.description}...</h3>
      <button onClick={() => add()}>Add to cart!</button>
      </div>
    </div>}
    {!(item) && <h1>API call failed, please refresh</h1>}
    </>
  );
}

export default ItemDetail;