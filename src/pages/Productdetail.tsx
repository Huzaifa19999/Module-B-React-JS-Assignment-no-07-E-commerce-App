import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import Navbar from '../components/Navbar';

function Productdetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h1 className='text-center m-5'>Loading...</h1>;

  return (
    <>
    <Navbar/>
    <div className="container parent mt-5">
        <h1>Product Details</h1>
        <br />
        <h1>{product.id}</h1>
      <div className="mt-5 card mb-3 p-2" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.image} className="img-fluid rounded-start p-2" alt={product.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className='d-flex details'>
                <div className='d-flex'>
                    <AttachMoneyIcon/>
              <p className="card-text"><small className="fw-bold text-body-secondary">Price: ${product.price}</small></p>
                </div>
              <div className='d-flex'>
              <CategoryIcon/><p className="ms-1 card-text">{product.category}</p>
              </div>
              <div className='d-flex'>
                <StarIcon className='text-'/>
              <p className="card-text">{product.rating.rate}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className='fw-bold mb-5' to='/'><h3>Back to Product List</h3></Link>
    </div>
    </>
  );
}

export default Productdetail;
