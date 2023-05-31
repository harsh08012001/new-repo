import '../App.css';
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';
import { useState } from 'react';

function Guru() {

  const [product, setProduct] = useState([
    {
      url:  require(`./gar6.jpg`),
      name: 'Hero Honda Splendor',
      category: 'Clothings',
      seller: 'Vamsi',
      price: 999
    },
    {
      url:  require(`./gar7.jpg`),
      name: 'Bajaj Classic ',
      category: 'Clothing',
      seller: 'Vamsi',
      price: 890
    },
    {
      url:  require(`./gar8.jpg`),
      name: 'Royal Enfield',
      category: 'Clothings',
      seller: 'Vamsi',
      price: 750
    },
    {
      url:  require(`./gar9.jpg`),
      name: 'Suzuki Gixxer',
      category: 'Clothing',
      seller: 'Vamsi',
      price:1000
    },
    {
      url:  require(`./gar10.jpg`),
      name: 'lamborghini(Racing Edition)',
      category: 'Clothing',
      seller: 'ATLA',
      price: 800
    },
    {
      url: require(`./gar2.jpg`),
      name: 'Mahindra THAR',
      category: 'Clothing',
      seller: 'ATLA',
      price: 1000
    },
    {
      url: require(`./garments.jpg`),
      name: 'lamborghini',
      category: 'Clothng',
      seller: 'ATLA',
      price: 2000
    }, {
      url:  require(`./gar11.jpg`),
      name: 'BENZ',
      category: 'Clothing',
      seller: 'ATLAz',
      price: 1500
    }, {
      url: require(`./gar3.jpg`),
      name: 'Mustang GT',
      category: 'Clothing',
      seller: 'ATLA',
      price: 3000
    }, {
      url:  require(`./gar12.jpg`),
      name: 'Bugatti Chiron',
      category: 'Clothing',
      seller: 'ATLA',
      price: 1100
    }, {
      url: require(`./gar4.jpg`),
      name: 'Rolls Royce',
      category: 'Clothings',
      seller: 'Clothings',
      price: 5000
    },
    {
      url: require(`./gar5.jpg`),
      name: 'Mustang GT',
      category: 'Clothings',
      seller: 'ATLA',
      price: 4000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default Guru;
