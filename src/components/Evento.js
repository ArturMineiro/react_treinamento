import Button from "./evento/Button"

function Evento({numero}){

    function meuEvento(){ 
        console.log('opa fui ativado '+  numero)

        console.log('ativando primeiro evento'+  numero)
    }

    function segundoEvento(){ 
        console.log('opa fui ativado '+  numero)

        console.log('ativando SEGUNDO evento'+  numero)
    }
     
    return(
    <div> 
<p>clique para disparar um evento</p>

<Button event={meuEvento} text="Primeiro Evento"/>
<Button event={segundoEvento} text="segundo Evento"/>
<button onClick={meuEvento}>Ativar!</button>
</div>
    )
}
export default Evento