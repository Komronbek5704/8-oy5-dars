
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      
      <h1 className='Name'>Products Page</h1>
      <Navbar />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
             <div className='product-card'>
              <img src={product.image}  />
              <p className=''>{product.title}</p>
              <p>${product.price}</p>
             </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}