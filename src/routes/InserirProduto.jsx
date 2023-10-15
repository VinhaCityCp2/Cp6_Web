import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProduto (){

    
        const navigate = useNavigate();

        let novoId= ListaProdutos[ListaProdutos.length - 1].id + 1;

        const [produto, setProduto] = useState({
            id:novoId,
            nome: '',
            desc: '',
            valor: '',
        });

        const handleSubmit = (e) => {

            e.preventDefault();

            ListaProdutos.push(produto);
            navigate('/produtos');
        };

        const handleChange = (e) => {
            e.preventDefault();

            const{ name, value } = e.target;

            setProduto({ ...produto, [name]: value });
        };
    
    
    return(
        <>
            <section>
                <h1>Inserir Produtos</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                       
                        <p>
                            <label htmlFor="idNome">
                                Nome do Produto
                            </label>
                            <input type="text" name="nome" id="idNome" 
                            
                            value={produto.nome} 
                            onChange={handleChange}
                            />
                        </p>
                        <p>
                            <label htmlFor="idDesc">
                                Descrição do Produto
                            </label>

                            <input type="text" name="desc"
                            id="idDesc"

                            value={produto.desc}
                            onChange={handleChange}
                            />
                        </p>
                        <p>
                            <label htmlFor="idValor">
                                Valor do Produto
                            </label>

                            <input type="text" name="valor"
                            id="idValor"

                            value={produto.valor}
                            onChange={handleChange}
                            />
                        </p>
                        <p>
                            <button type="submit">
                                Cadastrar
                            </button>
                        </p>
                    </fieldset>
                </form>
            </section>
        </>
    );
}