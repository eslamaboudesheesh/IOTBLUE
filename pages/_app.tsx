import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from '../redux/store';
import type { AppProps } from 'next/app'
import Layout from '../component/layout/layout'
import 'font-awesome/css/font-awesome.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>

  )
}

export default MyApp
