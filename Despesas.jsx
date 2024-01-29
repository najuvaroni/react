import React, { useState } from "react";
import css from './Despesas.module.css';

function Despesas() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [aux, setAux] = useState([])
    const [total, setTotal ] = useState(0)
    const[excluir, setExcluir] = useState(0)
    function Exibir(){
        let lista = [...aux]
        lista.push([nome, valor])
        setTotal(total + parseFloat(valor))
        setAux(lista)
    }

    function Delete(e){
        e.target.parentElement.style.display = "none"
        setExcluir(total - parseFloat(e) )
    }

    return (

        <div className={css.tudo}>
            <div className={css.header}>
                <img className={css.logo} src='./logo.png'/>
            </div>
           <div>
               <h1>Meus gastos</h1>
               <div className={css.inp}>
                   <input
                       type="text" value={nome}
                       onChange={(e) => setNome(e.target.value)} placeholder=" Insira o nome" id="nome"/>
                   <input type="number" value={valor}
                          onChange={(e) => setValor(e.target.value)} placeholder=" Insira o valor" id="valor"/>
               </div>
                   <div >
                       <button className={css.bttenvia} onClick={Exibir}>Enviar</button>

                   <div>
                       {aux.map((valores, index) => (
                           <div onClick={() => Delete(valores[1])}>
                               <p>{valores[0]}</p>
                               <p>{valores[1]}</p>
                               <i className="fa-solid fa-trash"></i>
                           </div>))}
                       <p>R$ {total}</p>
                   </div>

               </div>
           </div>
        </div>
    );
}

export default Despesas;