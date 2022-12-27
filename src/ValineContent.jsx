/* LANDING PAGE */
import { Footer, Navbar } from "./ui"
/* import logo from './images/valinups.png' */



export const ValineContent = () => {
  
  return (
    <div className="grid-container">

      {/* NAVBAR */}
      <Navbar/>

    {/* CONTENIDO */}
    <div className="hero">
      <div className="hero_text">
        <h1>BIENVENIDOS A <b>VALINUPS</b></h1>
      </div>
    </div>
    {/*  <div className="content">Contenido</div> */}


    {/* FOOTER */}
    <Footer/>
    </div>
  )
}
