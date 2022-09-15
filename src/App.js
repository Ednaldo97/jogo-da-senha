import React, { useState } from "react";
import "./App.css";

const palavras = ['pedra']

for (let i = 0; i < palavras.length; i++) {
  const e = Math.floor(Math.random() * (i + 1));
  [palavras[i], palavras[e]] = [palavras[e], palavras[i]];
 }

 console.log(palavras[0]);

 let valor = palavras[0];

function funCow(str) {
  let sumCow = 0;
  
  for(let a = 0; a < str.length; a++) {
        for(let b = 0; b <= valor.length; b++) {
          if(str[a] === valor[b]){
              sumCow += 1
          }
        }
  }
  return(
    sumCow
  )
}

function funBull(str) {
  let sumBull = 0;

  for(let a = 0; a < str.length; a++) {
        for(let b = a; b <= a; b++) {
          if(str[a] === valor[b]){
              sumBull += 1
          }
        }
  }
  return(
    sumBull
  )

}


function App() {
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");
  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };
  

  const handleClickBtInserir = () => {
    let textoTrim = texto.trim();
    if (textoTrim) {
      setTextos([...textos, textoTrim]);
    }
  };
  return (
    <div className="App">
      <h1>Cow and Bull</h1>
      <p>Descubra a palavra. </p>
        <p>Dica: tem 5 letras que não se repetem </p>
      
      <p>
        <label htmlFor="texto">Digite a palavra em minúsculo: </label>
        
        
      </p>
     <div>
      <input
          id="texto"
          type="text"
          
          value={texto}
          onChange={handleChangeTexto}
        />{" "}</div> 
        <p></p>
      <button onClick={handleClickBtInserir}>Inserir</button>
      <p></p>
      <div>
      {textos.length > 0 && (
        <table>
          <thead>
          <tr>
            
            <th >Inserido</th>
            <th>Cow</th>
            <th>Bull</th>
            
          </tr>
          </thead>
          {textos.map((umTexto, index) => (
            <tr key={index}>
              <td>{umTexto}</td>
              <td>{funCow(umTexto) - funBull(umTexto)}</td>
              <td>{funBull(umTexto) }</td>
              
            </tr>
          ))}
          
        </table>
      )}</div>
    </div>
  );
}

export default App;