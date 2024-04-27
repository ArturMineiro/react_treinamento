import logo from './logo.svg';
import './App.css';

function App() {

  const name ='Artur'
  const newname = name.toLocaleUpperCase()
 function multiplicar(a,b){
  return a*b
 }
 const url = "https://cdn.pixabay.com/photo/2022/11/28/17/47/cosmos-7622740_1280.jpg"
  return (
    <div className="App">
<h1> Ola d</h1>
<p> Olá !!!, {name}</p>
<p> Soma: {multiplicar(20, 34)}</p>
<img src={url} alt="minha imagem" width="50%" heigth="50%"/>

    </div>
  );
}

export default App;
