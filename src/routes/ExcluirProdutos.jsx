import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProduto } from '../components/ListaProdutos';

export default function ExcluirProdutos(){
    const {id} = useParams();
    document.title = "Lista de Produtos"

    const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id))[0]

    return(
        <h1>ol</h1>
    )
}
    