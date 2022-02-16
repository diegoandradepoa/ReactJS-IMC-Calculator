 import { useState } from 'react';
import './app.css';

function App(){
const [peso, setPeso ] = useState(''); // Uso de estados para manipular as informações primeiro parâmetro o valor atual e o segundo o que foi modificado!
const [altura, setAltura] = useState('');

const [mensagem, setMensagem] = useState(''); // Por padrão começa vazio na maioria dos casos o valor do State.

function calcularIMC(){
  const alt = altura / 100;
  const imc = peso / (alt * alt);

  if (imc < 18.6){
    setMensagem('Você está abaixo do peso! Seu IMC: ' + imc.toFixed(2));
  } else if (imc >= 18.6 && imc < 24.9){
    setMensagem('Peso ideal! Seu IMC: ' + imc.toFixed(2));
  } else if (imc >= 24.9 && imc < 34.9){
    setMensagem('Você está levemente acima do peso! Seu IMC: ' + imc.toFixed(2));
  } else if (imc > 34.9){
    setMensagem('Cuidado Obesidade! Seu IMC: ' + imc.toFixed(2));
  }
}

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu imc</span>

      <div className="area-input">
        <input 
        type="text"
        placeholder="Peso em (kg) EX: 90" 
        value={peso}
        onChange={(e) => setPeso(e.target.value)} // Uso de funções para chamar o valor alterado no state
        />
        <input 
        type="text"
        placeholder="Altura em (cm) EX: 180" 
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
    
  )
}

export default App;
