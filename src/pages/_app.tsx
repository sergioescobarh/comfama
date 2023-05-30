import '../styles/globals.css'
import 'antd/dist/reset.css';
import '../styles/AnimesContainer.scss'
import '../styles/Recomendation.scss'
import '../styles/Search.scss'
import '../styles/Header.scss'
import '../styles/MyCarousel.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'
import {animesReducer} from '../reducers/index'
import { combineReducers } from 'redux';

export default function App({ Component, pageProps }: AppProps) {
  const store = createStore(animesReducer)


  return <Provider store={store}><Component {...pageProps} /></Provider>
}
