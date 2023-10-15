import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { useState } from 'react';




export default function EditarProduto() {
  
    const { id } = useParams ();
    const navigate = useNavigate();

    const recProdutoListaByid = ListaProdutos
    FileSystemEntry((item) => item.id == id);

    const[produto, setProduto] =useState({
        id: recProdutoListaById[0].id,
        nome: recProdutoListaById[0].nome,
        desc: recProdutoListaById[0].desc,
        valor: recProdutoListaById[0].valor,
    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        let indice;
        ListaProdutos.forEach((item, index) => {
            if (item.id == produto.id) {
                indice = index;
            }
        });

        ListaProdutos.splice(indice, 1, produto);
        navigate('/produtos');
    };

    const handleChange = (event) =>{
        const {name, value } = event.target;
        setProduto({...produto, [name]: value});
    };



  return (
    <section >
    <h1 >EDITAR PRODUTOS</h1>
    {/*chamando a função handleSubmit dentro do form */}
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>PRODUTO SELECIONADO</legend>
        <div>
          <input
            type="hidden"
            name="id"
            value={produto.id}
             /*chamando a função handleChance dentro do input*/
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="idNome">Nome do Produto:</label>
          <input
            type="text"
            name="nome"
            id="idNome"
            value={produto.nome}
               /*chamando a função handleChance dentro do input*/
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="idDesc">Descrição do Produto:</label>
          <input
            type="text"
            name="desc"
            id="idDesc"
            value={produto.desc}
               /*chamando a função handleChance dentro do input*/
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="idValor">Valor do Produto:</label>
          <input
            type="text"
            name="valor"
            id="idValor"
            value={produto.valor}
               /*chamando a função handleChance dentro do input*/
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="subtmit" >EDITAR</button>
        </div>
      </fieldset>
    </form>
  </section>
  );
}

