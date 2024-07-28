
import '../styles/global.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
   
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;