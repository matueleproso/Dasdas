import { useState, useEffect } from "react"
// Hooks do react - estado e renderização
import axios from "axios"

const Produtos = () => {
    // Estado com lista de pizzas
    const [pizzas, setPizzas] = useState(['Calabresa', 'Muçarela', 'Baiana'])

    // Consumo de endpoint com as pizzas
    // GET - busca os dados do endpoint ou rota
    // THEN - é uma Promise - método assíncrono
    // catch - tratamento de erros
axios.get("http://viacep.com.br/ws/01010000/json")
    .then(response=>{ 
    console.log(response.data.data)
    setPizzas(response.data.data)
})
.catch(errors=>console.log(errors))
    const listaPizzas = pizzas.map(pizza=><li>{pizza.nome}</li>)
    // Iteração da lista de pizzas
    return (
        <div>
            <ul>
            {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos