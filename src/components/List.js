
import Item from "./Item"
function List(){
    return(
    <>
        <h1>Minha Lista</h1>
        <ul>
    
       <li><Item marca="Ferrari" ano_lancamento={1987}/></li>
       <li><Item marca="Fiat" ano_lancamento={1997}/></li>
       <li><Item marca="Uno" ano_lancamento={1967}/></li>
        </ul>
    </>
)
}

export default List