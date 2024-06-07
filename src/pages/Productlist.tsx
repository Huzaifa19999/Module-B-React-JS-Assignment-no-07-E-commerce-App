import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import '../App.css'
import { Link,  } from "react-router-dom";
import Navbar from "../components/Navbar";


const Productlist = () => {


    const [ products, setProducts] = useState<any>([])

        axios.get('https://fakestoreapi.com/products')
    .then((res) => {
        // console.log(res.data)
        setProducts([...res.data])
    }).catch((err) => {
        console.log(err)
    });




  return (
    <>
    <Navbar/>
    {/* <button onClick={getProductData} className="m-5 fw-bold p-2 btn btn-primary mx-auto d-block">Show Products List</button> */}
    <div  className="product-list container mt-5 p-5">
        {products.length===0 ? (
            <h1 className="fw-bolder heading">Loading...</h1>
        ):(
    products.map((product:any) => (
        <Link key={product.id} to={`/productdetail/${product.id}`}>
        <div  className="card" style={{width: '18rem'}} >
        <img src={product.image} className="card-img-top product-img p-3" alt="..."/>
        <div className="card-body">
          <p className="card-text text-center fw-bold">{product.title}</p>
        </div>
      </div>
        </Link>
    )))}
</div>
    </>
  )
}

export default Productlist