import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

interface MainLayoutProps {
  children: JSX.Element
}

export const MainLayout = (props: MainLayoutProps) => {
  const {children} = props
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}