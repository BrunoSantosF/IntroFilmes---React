import React from "react";

import "./index.css"

export const Filme = ({nome, imagem}) => {
    return(
        <div className="filme-pop-up">
            <p>{nome}</p>
            <img src={imagem} alt=""></img>
        </div>
    )
}