const Produtos = () => {

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