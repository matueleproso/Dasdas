import axios from "axios"
const Produtos = () => {
axios.get("http://viacep.com.br/ws/01010000/json")
    .then(response=>{ 
    console.log(response.data)

})
    const pizzas = [
        'Pizza de Mularela',
        'Pizza de Calabresa',
        'Pizza Baiana'
    ]

    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
    return (
        <div>
            <ul>
            {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos