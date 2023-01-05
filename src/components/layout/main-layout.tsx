import {Header} from "../header/header";
import {Footer} from "../footer/footer";

export const MainLayout = ({children}: any) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}