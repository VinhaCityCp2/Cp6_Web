import { useRef } from "react";
import Produtos from "./Produtos";
import InserirProduto from "./InserirProduto";
import Nav from "../components/Nav";
import "./Login.css"


export default function Login (){

        const user = useRef();
        const password = useRef();
      
        const getUser = sessionStorage.getItem('userData');
        const getSenha = sessionStorage.getItem('senhaData');
      
       
      
        /*verifica o usuario e senha e grava na sessão */
      
        const handleSubmit = () => {
      
          if (user.current.value === 'admin' && password.current.value === '12345') {
      
            let token =
      
              Math.random().toString(16).substring(2) +
              Math.random().toString(16).substring(2);
      
            sessionStorage.setItem('userData', 'admin');
            sessionStorage.setItem('senhaData', token);
      
          } else {
      
            alert('Usuário e senha inválidos !!!');
      
          }
      
        };


        return (

            <section>
              <div className="login_geral">
                
                
                
                {getUser && getSenha ? (
                    <InserirProduto />
                    
                ) : (
        
                
        
                <form onSubmit={handleSubmit}>
        
                  <p className="usuario">
                    USUÁRIO:
                    <input type="text" ref={user} />
                  </p>
                  <br />
                  
        
                  <p className="senha">
                    SENHA:
                    <input type="password" ref={password} />
                  </p>
                  <br />
        
                  <input className="confirmacao" type="submit" value="Login" />
        
                </form>
              
              )}
              </div>
            </section>
        );
}