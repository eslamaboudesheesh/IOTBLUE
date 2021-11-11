import React, { FC } from 'react'
import Footer from './footer';
import MainNavbar from './MainNavbar';


const Layout: FC = props => {

  return (
    <div className="Layout" >
      <MainNavbar />
      <div className="content" >
        {props.children}
      </div>
      <Footer />

    </div>
  )
}




export default Layout;