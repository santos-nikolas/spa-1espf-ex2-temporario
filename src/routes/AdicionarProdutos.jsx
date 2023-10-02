import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ListaProduto } from '../components/ListaProdutos';
// import { useHistory } from 'react-router-dom';

export default function AdicionarProdutos(){
    const {id} = useParams();

    document.title = "Adicionar Produtos " + id;

    //Criar uma estratégia para recuperar o produto na lista
    // Utilizando o id
    // const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id));
    const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id))[0];


  return (
    <div>
      <h1>Adicionar Produtos</h1>
      <div>
        <form>
          <fieldset>
            <legend>Produto a ser adicionado</legend>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                name="nome"
                placeholder="Digite o nome do Produto."
              />
            </div>
            <div>
              <label htmlFor="desc">Descrição:</label>
              <input
                type="text"
                name="desc"
                placeholder="Digite a descrição do Produto."
              />
            </div>
            <div>
              <label htmlFor="preco">Preço:</label>
              <input
                type="number"
                name="preco"
                placeholder="Digite o preço do Produto."
              />
            </div>
            <div>
              <button type="button">
                ADICIONAR
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
