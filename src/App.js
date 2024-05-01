import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';



function App() {
const nome = "Maria"
  
  return (
    <div className="App">
 <h1>teste</h1>
 <Frase/>
 <Frase/>
<HelloWorld/>
<SayMyName nome="Artur"/>
<SayMyName nome="Tiago"/>
<SayMyName nome={nome}/>
<Pessoa nome="artur" foto="https://cdn.pixabay.com/photo/2022/11/28/17/47/cosmos-7622740_1280.jpg" idade="20" profissao="Programador"/>
<List/>

<h1> Testando eventos</h1>
<Evento numero="1"/>
<Evento numero="2"/>

<Form/>
    </div>


  );
}

export default App;
