import React from 'react'
import Navbar from '../Component/Navbar'
import Body_page from './Body_page'
import About from './About'
import WhatIDo from './WhatIDo'
import Project from './Project'
import Footer from '../Component/Footer'
import Adminpage from './Adminpage'

function Home() {
  return (
    <div>
        {/* <Navbar/> */}
        <Body_page/>
        <About/>
        <WhatIDo/>
        <Project/>
        {/* <Footer/> */}
     

    </div>
  )
}

export default Home