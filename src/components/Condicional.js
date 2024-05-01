import {useState} from 'react'

function Condicional(){

const [email,setEmail] = useState()
const [userEmail, setUserEmail] =useState()
function limparEmail(){
    setUserEmail()
}
function enviarEmail (e){
    e.preventDefault()
    setUserEmail(email)
    console.log(userEmail)
}
return(
<div>
<h2>Cadastre o sey e-mail:</h2>
<form>
<input type="email" placehoader="digite seu email" onChange={(e)=>setEmail(e.target.value)}/>

</form>
<button onClick={enviarEmail}>Enviar-email</button>
{userEmail  &&(
    <div>
<p> O e-mail do usuário é: {userEmail}</p>
 <button onClick={limparEmail}>Limpar e-mail</button>
 </div>
) }
</div>

)


}
export default Condicional