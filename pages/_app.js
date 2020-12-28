import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

if (process.env.NODE_ENV !== 'production') {
  require('../mocks')
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
