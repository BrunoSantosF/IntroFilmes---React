import React,{ useState } from "react";
import IntrocompBranco from "./imagens/tet.svg"
import IntrocompPreto from "./imagens/tet2.svg"
import popcorn from "./imagens/popcorn.svg"

import Event from "./button";

import { Filme } from './Components/Filme'

import './App.css'
import './grid.css'

export default () => {

  const [ mostra, setMostra ] = useState(true)

  const filmes = [ 
    {
      nome: "onde esta meu pai",
      imagem: ""
    },
    {
      nome: "esqueceram de mim",
      imagem: ""
    }
  ]

   return (
    <div className="screen">
      <div className="screen2">
        <div className="titleIntro"><img id="img1" src={IntrocompBranco}/></div>
        <div className="introFilmes">
            <section>
              <p id="introfilmes">INTRO<strong>FILMES</strong></p>
              <p id="frase">Uma plataforma de filmes e séries para praticar conceitos de html, css e javascript.</p>
            </section>
            
            <img id="img2" src={popcorn} />
        </div>
        <hr id="line"/>
        
        <h1 id="catalogo">CATÁLOGO</h1>

      
        <div className="test">
          <div class="grid-container">

            <div class="grid-item" id="movie1" onClick={() => setMostra(anterior => !anterior)}>{mostra && <Filme nome="legal" imagem=""/>}</div>
            {/* <div class="grid-item" id="movie2"></div>
            <div class="grid-item" id="movie3"></div>  
            <div class="grid-item" id="movie4"></div>
            <div class="grid-item" id="movie5"></div>
            <div class="grid-item" id="movie6"></div>
            <div class="grid-item" id="movie7"></div>
            <div class="grid-item" id="movie8"></div>
            <div class="grid-item" id="movie9"></div>  
            <div class="grid-item" id="movie10"></div>  
            <div class="grid-item" id="movie11"></div>
            <div class="grid-item" id="movie12"></div>
            <div class="grid-item" id="movie13"></div>  
            <div class="grid-item" id="movie14"></div>
            <div class="grid-item" id="movie15"></div>   */}
          </div>
        </div>

        <div className="test" id="footer">
           <img id="img3" src={IntrocompPreto}></img>
        </div>
      
  
      </div>
      

    </div>
   )
}

