import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux'

let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  });

let price = 0

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: block;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding-bottom: 1em;
  overflow:auto
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const OrderButton = styled.div`
  cursor: pointer;
  position: relative;
  top: 0px;
  right: 0px;
  width: 160px;
  height: 60px;
  align-text: center;
  justify-content: center;
  border-radius: 999em;
  margin: 0 auto;
  padding: 0;
  z-index: 10;
  background-color: green;
  color: white;
`;

export default ({ showModal, setShowModal }) => {
  let dispatch = useDispatch()
  const modalRef = useRef();
  let selector = useSelector((state) => (state))
  const [modalContent, setModalContent] = useState()
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const orderItems = () => {
    setModalContent(<div>ORDER PLACED! THANK YOU!</div>)
    dispatch({type: "order", payload: 0})
  }

  const keyPress = useCallback(e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
      else if (e.key === 'Enter' && showModal) {
        orderItems()
      }
    },[setShowModal, showModal]);

  useEffect(() => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  useEffect(() => {
    if (selector.length > 0)
    {
    let counts = {};
    price = 0
    let allitems = selector;
    allitems.forEach(function (x) { counts[x.title] = (counts[x.title] || 0) + 1; });
    allitems.forEach(item => price += item.price);
      setModalContent(Object.keys(counts).map(function (key) {
        return <div>
         <div>{key} <b>QTY: {counts[key]}</b></div>
         </div>
      }))
    } 
    }, [selector]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
            
              <ModalContent>
                {modalContent}
                <div style={{"height": "10px"}} />
                {<b>Total: {formatter.format(price)}</b>}
                {selector.length > 0 && <OrderButton
                aria-label='Order items'
                onClick={() => orderItems()}>
                ORDER<br></br>ITEMS
              </OrderButton>}
              </ModalContent>
              
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => {setShowModal(prev => !prev)}}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};