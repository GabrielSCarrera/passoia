import { useState } from "react";

// Import das imagens
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";

function Lancamentos() {
  // Estado que guarda a cor (imagem) atual
  // O valor inicial é a imagem "vermelho"
  const [cor, setCor] = useState(vermelho);

  return (
    <>
      <h1>Cor Favorita</h1>

      {/* A imagem exibida será sempre a do estado "cor" */}
      <img src={cor} alt="Batom" />

      {/* Cada botão altera o estado "cor", trocando a imagem exibida */}
      <button onClick={() => setCor(vermelho)}>Vermelho</button>
      <button onClick={() => setCor(azul)}>Azul</button>
    </>
  );
}

export default Lancamentos;
