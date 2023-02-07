import type {AppProps} from 'next/app'
import {MainLayout} from "../src/components/layout/MainLayout";
import '../styles/general.sass'

export const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <MainLayout>
        <Component {...pageProps}/>
      </MainLayout>
    </>
  )
};

export default App
