import React from 'react';
import "./Login.css";

export default function Login(props) {
    function mensagem() {
        alert("O  nome do usuário e/ou senha está inválido.")
    }
    return (
        <div>
            <form className="formulario" name="formulario">

                <input type="text"  name="nome" placeholder="Nome"></input>
                <input type="password" name="senha" placeholder="Senha"></input>
                <button className="botao" onClick={() => mensagem()}>Login</button>
                <p className="esqueceu">Esqueceu a senha? <a href="#">click aqui</a></p>
                <p id="props">{props.mensagem}</p>
            </form>
        </div>
    );
}