import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProduto } from '../components/ListaProdutos';

export default function ExcluirProdutos(){
    // const {id} = useParams();
    // document.title = "Lista de Produtos"

    // const handleDelete = (id)=>{
    //     fetch(`http://localhost:5173/produtos/${id}`,{method: 'delete'})
    //     .then(()=> (window.location = '/produtos'))
    //     .catch((error)=> console.log(error))
    // }

    // const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id))[0]

    return(
        <div>
        <h1>Adicionar Produtos</h1>
          <div>
            <form>
              <fieldset>
                <legend>Produto a ser adicionado</legend>
                <div>
                  <label htmlFor="">Nome:</label>
                  <input type="text" name="nome" placeholder="Digite o nome do Produto."/>
                </div>
                <div>
                  <label htmlFor="">Descrição:</label>
                  <input type="text" name="desc" placeholder="Digite a descrição do Produto."/>
                </div>
                <div>
                  <label htmlFor="">Preço:</label>
                  <input type="text" name="preco" placeholder="Digite o preço do Produto."/>
                </div>
                <div>
                  <button>ADICONAR</button>
                </div>
              </fieldset>
            </form>
          </div>

    </div>
    )
}
    