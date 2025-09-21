import './output.css';
import { MaquinaDeEscrever } from './components/MaquinaDeEscrever';
import { Pedido } from './components/pedido';
import { useState, useEffect } from 'react';
function App() {
  const text = "Célia, nesses 3 meses que estamos em oração, eu tenho aprendido muito sobre o amor, nosso Senhor tem me ensinado muito sobre o amor, e eu tenho aprendido muito com você também, você é uma mulher forte, bondosa, amorosa, linda, maravilhosa, e eu te adimiro muito, mesmo estando distante não houve um dia sequer que eu não me senti cuidado por você," +
    "você tem me dado apoio nos momentos difíceis, você tem me motivado a ser melhor, eu sou muito grato a Deus por ter te colocado na minha vida, falar com você deixa o meu dia melhor, eu te amo e quero estar ao seu lado, quero poder te fazer feliz, quero te dar todo o amor que você merece, quero cuidar de você, quero te fazer sorrir, quero ser o homem que você" +
    "sempre sonhou, eu te amo muito Célia, e quero passar o resto da minha vida ao seu lado, eu sei que não sou perfeito, mas eu quero ser melhor por você," +
    "eu quero ser o homem que você merece.";
    const [showPedido, setShowPedido] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPedido(true);
        }, text.length * 50 + 1000); // Tempo para digitar o texto + 1 segundo extra

        return () => clearTimeout(timer);
    }, []);
  return (
    <div className="bg-white flex flex-col justify-evenly items-center w-screen h-screen p-10 ">
      <div className="text-8xl h-1/10">
        <h1>Para Célia o meu Amor</h1>
      </div>
      <div className='text-2xl w-4xl text-justify h-1/2'>
        <MaquinaDeEscrever text={text} />
      </div>
      {showPedido && <Pedido />}
    </div>
  );
}

export default App;
