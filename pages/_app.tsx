import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
