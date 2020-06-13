import { wrapper } from '../store'
import './css-global.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
