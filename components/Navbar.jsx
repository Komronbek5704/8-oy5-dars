
import Link from 'next/link';

const Navbar = () => (
  <nav className='navbar'>
    <Link className='link' href="/">Home</Link>
    <Link className='link' href="/about">About</Link>
    <Link className='link' href="/products">Products</Link>
  </nav>
);

export default Navbar;