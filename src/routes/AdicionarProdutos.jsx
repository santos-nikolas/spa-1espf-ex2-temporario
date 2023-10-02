import React, { useState } from 'react';
import { ListaProduto } from '../components/ListaProdutos';
// import { useHistory } from 'react-router-dom';

export default function AdicionarProdutos(){
    function AdicionarProdutoTabela({ produto }) {
        return (
          <tr>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.desc}</td>
            <td>{produto.preco}</td>
          </tr>
        );
      }


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
                value={novoProduto.nome}
                onChange={handleInputChange}
                placeholder="Digite o nome do Produto."
              />
            </div>
            <div>
              <label htmlFor="desc">Descrição:</label>
              <input
                type="text"
                name="desc"
                value={novoProduto.desc}
                onChange={handleInputChange}
                placeholder="Digite a descrição do Produto."
              />
            </div>
            <div>
              <label htmlFor="preco">Preço:</label>
              <input
                type="number"
                name="preco"
                value={novoProduto.preco}
                onChange={handleInputChange}
                placeholder="Digite o preço do Produto."
              />
            </div>
            <div>
              <button type="button" onClick={handleAdicionar}>
                ADICIONAR
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
