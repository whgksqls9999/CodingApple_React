import { useState } from 'react'
import './App.css';
import productsData from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <div className="shop-title">My Shop</div>
      <div className="shop-home">Home</div>
      <div className="shop-cart">Cart</div>
    </nav>
  )
}

function Home() {
  let [products, setProducts] = useState(productsData)

  return (
    <>
      <section>
        <img src={process.env.PUBLIC_URL + 'bg.png'} width="100%" />
      </section>
      <section className="product-list">
        {
          products.map((element) => {
            return (
              <Product element={element} />
            )
          })
        }
      </section>
    </>
  )
}

function Product(props) {
  return (
    <div className="product">
      <div>상품 사진</div>
      <div>{props.element.title}</div>
      <div>{props.element.content}</div>
      <div>{props.element.price}</div>
    </div>
  )
}

export default App;
