
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1 className='Name'>Product Page</h1>
      <Navbar />
      <div className='Product'> 
        <img src={product.image} alt={product.title} width="200" />
        <h1 className='title'>{product.title}</h1>
        <p className='Description'>{product.description}</p>
        <p>${product.price}</p>
      </div>
      
    </div>
  );
}