import React from "react";

function Testimonios(){
  return (
    <div className="contenedor-testimonio">
      <img  className="imagen-testimonio"
      src={require("../imagenes/testimonio-emma.jpg")}
      alt="foto de emma "/>
      <div className="contenedor-texto-textimonios">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo_testimonio">Ingeniera de software en spotify</p>
        <p className="texto-testimonio">Mi nombre es Emma y soy ingeniera de software en Spotify. Desde que me uní a esta increíble compañía, mi pasión por la música y la tecnología ha alcanzado nuevas alturas. Trabajar en un lugar donde la innovación y la creatividad se fusionan para crear experiencias únicas para millones de personas en todo el mundo es realmente inspirador.</p>

      </div>
    </div>
  );
}

export default Testimonios;
