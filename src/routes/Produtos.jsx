import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Produtos.module.css';
import { AiTwotoneEdit as Editar } from 'react-icons/ai';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Tenta obter a lista de produtos do localStorage
    const listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));

    // Se existir, usa a lista de produtos do localStorage
    if (listaProdutos) {
      setProdutos(listaProdutos);
    } else {
      // Senão, usa a lista de produtos inicial
      const listaInicial = [
        { id: 1, nome: 'Teclado', desc: 'Teclado Mecânico 102 Teclas.', preco: 220 },
        { id: 2, nome: 'Mouse', desc: 'Mouse sem fio.', preco: 56.98 },
        { id: 3, nome: 'Monitor', desc: '32" 75Hz.', preco: 2500 }
      ];
      setProdutos(listaInicial);
    }
  }, []);

  const handleDelete = (id) => {
    // Atualiza a lista excluindo o produto correspondente ao ID
    const novaListaProdutos = produtos.filter((item) => item.id !== id);
    setProdutos(novaListaProdutos);

    // Atualiza o localStorage com a nova lista de produtos
    localStorage.setItem('listaProdutos', JSON.stringify(novaListaProdutos));
  };

  return (
    <div>
      <h1>Produtos</h1>

      <table className={style.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>EDITAR</th>
            <th>EXCLUIR</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((item, indice) => (
            <tr key={indice} className={style.lineTbl}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.desc}</td>
              <td>{item.preco}</td>
              <td>
                <Link to={`/editar/produtos/${item.id}`}>
                  <Editar />
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={6}>PRODUTOS INFORMÁTICOS - QTD = {produtos.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
