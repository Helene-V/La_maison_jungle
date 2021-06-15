const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>
    )
}

export default ShoppingList

/*géneration d'une key /
Méthodes pour itérer sur de la data : 
map (), forEach(), filter (), reduce()*/