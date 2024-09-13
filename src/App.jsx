import React from 'react';
import { NavBar } from './NavBar';
import { Content } from './Content';
import { Card } from './Card';
import { Footer } from './footer';



const App = () => {
  return (
    <div style={{maxWidth:"1300px"}}>
      <NavBar/>
      <Content/>
      <div className=" row gx-0 d-flex justify-content-between pt-3">
        <Card imagen="/src/Imagenes/1.png" title="Primera Tarjeta" texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti tempore non, nesciunt tempora maxime soluta ipsum nihil possimus sunt facere ex minima eos officiis deserunt. Esse recusandae nostrum dolor?"/>
        <Card imagen="/src/Imagenes/2.png" title="Segunda Tarjeta" texto = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus iusto distinctio quam rem, error sequi optio et vitae nemo blanditiis pariatur itaque ea. Deserunt necessitatibus commodi reprehenderit excepturi quidem."/>
        <Card imagen="/src/Imagenes/3.png" title="Tercera Tarjeta" texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, neque facere eaque alias illo architecto necessitatibus excepturi accusamus modi similique nihil aspernatur, voluptatum quidem iste fugit rem reiciendis, incidunt repellendus!"/>
        <Card imagen="/src/Imagenes/4.png" title="Cuarta Tarjeta" texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laborum sapiente voluptatem repellendus dolorum iure expedita architecto excepturi, nesciunt, optio facilis officia? Quam vitae, modi expedita voluptatibus officia corrupti eaque!"/>
      </div> 
      <Footer/>
    </div>
  )
}

export default App;