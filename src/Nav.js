import './App.css';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import cartpic from './cart.png';
import Modal from './Modal.js'

const STORAGE_KEY = "cart.items"

function Nav() {
  let select = useSelector((state) => (state))

    const [cartText, setCartText] = useState("Cart")
    const [showModal, setShowModal] = useState(false)

    const navStyle = {
        color: "white"
    }

    useEffect(() => {
      setCartText("Cart" + "  (" + select.length + ")")
    }, [select])

  return (
    <>
    <nav>
      <h3 className="navlogo">THRIFTY</h3>
      <ul className="nav-links">
        <li>
          <Link style={navStyle} to="/shop">Shop</Link>
        </li>
        <li>
          <Link style={navStyle} to="/about">About</Link>
        </li>
      </ul>
      <div className="cart" style={navStyle} onClick={() => setShowModal(true)}>
          <img src={cartpic} width="40px"alt="Cart"></img>
          <div className="cart-text">{cartText}</div>
      </div>
    </nav>
    <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    </>
  );
}


export default Nav;