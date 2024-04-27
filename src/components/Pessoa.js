
function Pessoa({nome,idade,profissao,foto}) {

  
    return (
      <div className="App">
  <img src={foto} alt={nome} width="50%" height="50%"/>
  <p>  {nome}</p>
  <p>  {idade}</p>
  <p>  {profissao}</p>
      </div>
  
  
    );
  }
  
  export default Pessoa;
  