import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      
      <h1 className='Name'>About Page</h1>
      <Navbar />
      <div  className='navbar_1'>
        <Link className='link_1' href="/about/teacher">Teacher</Link>
        <Link className='link_1' href="/about/student">Student</Link>
      </div>
      
      
    </div>
  );
}