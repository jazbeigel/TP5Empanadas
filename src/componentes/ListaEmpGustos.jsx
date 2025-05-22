import './styles/listaEmpGustos.css';

const ListaEmpGustos = ({ pedidos }) => {
    const resumen = {}; //inicializa un objeto resumen para contar la cant de empanadas por gusto

    pedidos.forEach(pedido => { //recorre los pedidos que traje desde arriba
        pedido.empanadas.forEach(({ gusto, cantidad }) => { //recorro el array de empanadas dentro del de pedidos
            if (resumen[gusto]) { // si ya existe una empanada con ese gusto, suma la cantidad que pidio el cliente
                resumen[gusto] += cantidad;
            } else {
                resumen[gusto] = cantidad; // si no la encuentra, queda igual
            }
        });
    });

    return (
        <div className="lista-gustos">
            <h2>Totales por gusto</h2>
            <ul>
                {Object.entries(resumen).map(([gusto, cantidad]) => ( //Object.entries eso hace que pase de un array con dos campos, a un array con 2 array, busca englobar cada empanada con sus dos respectivos campos
                    <li key={gusto}>{gusto}: {cantidad}</li> //creo un item de lista para cada gusto, y le escribo al lado su cantidad
                ))}
            </ul>
        </div>
    );
};

export default ListaEmpGustos; 