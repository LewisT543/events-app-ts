import type {AppProps} from 'next/app'
import {MainLayout} from "../src/components/layout/MainLayout";
import '../styles/general.sass'
import '../styles/globals.css'

export const App = ({Component, pageProps}: AppProps) => (
  <>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>
);

export default App
