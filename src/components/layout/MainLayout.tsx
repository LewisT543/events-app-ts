import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

export const MainLayout = ({children}: any) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}