import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { useState } from 'react';

export default function EditarProduto() {
  
  const { id } = useParams();
  
  const navigate = useNavigate();

  
  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  /*Hook -useState*/

  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });

  /*funções */

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    /*metodo slice- vai dividir o array com base no indice e no objeto */
    ListaProdutos.splice(indice, 1, produto);
    /*chamar a tela produtos */
    navigate('/produtos');
  };

  const handleChange = (event) => {
    /*desestruturando */
    const { name, value } = event.target;
    /*pegando o useState e fazendo um spred no produto pegando o name e value do input */
    setProduto({ ...produto, [name]: value });
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
            <button type="subtmit"> EDITAR </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

