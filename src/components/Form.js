import {useState} from 'react'


function Form(){
    
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('usuario cadastrado!!')
        console.log(name)
        console.log(password)
    }

    const [name,setName] = useState('Matheus')
    const [password,setPassword] = useState('senha')
    return(

        <div>
<h1>Meu cadastro</h1>
<form onSubmit={cadastrarUsuario} >
    <div>
        <label htmlFor="name">Nome:</label>
        <input type text="text" 
        id="name" 
        name="name"
         placeholder="digite seu nome"
         onChange={(e) => setName(e.target.value)}
         />  
   </div>
   <div>
    <label htmlFor="password">Senha</label>
        <input type text="password"
         id="password"
          name="password" 
          placeholder="digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          />  
   </div>
<div>
    <input type="submit" value="Cadastrar"/>
</div>
</form>
        </div>
    )
}

export default Form