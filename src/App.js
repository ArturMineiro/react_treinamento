import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
const nome = "Maria"
  
  return (
    <div className="App">

<HelloWorld/>
<SayMyName nome="Artur"/>
<SayMyName nome="Tiago"/>
<SayMyName nome={nome}/>
<Pessoa nome="artur" foto="https://cdn.pixabay.com/photo/2022/11/28/17/47/cosmos-7622740_1280.jpg" idade="20" profissao="Programador"/>
    </div>


  );
}

export default App;
