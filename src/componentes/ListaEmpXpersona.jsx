import './ListaEmpXpersona.css';


const ListaEmpXpersona = ({ pedidos }) => {
    return (
        <div className="lista-persona">
            <div className="persona">
                <h2>Pedidos por persona</h2>
                {pedidos.map((pedido, index) => ( //index es el id del pedido
                    <div key={index}> {/*muestra en base a la key (id)*/}
                        <h3>{pedido.nombre} ({pedido.sector})</h3> {/*muestra en h3 el nombre de quien realizo el pedido y en que sector se hizo*/}
                        <ul>
                            {pedido.empanadas.map((emp, indx) => ( //con map recorro el array
                                <li key={indx}>{emp.gusto}: {emp.cantidad}</li> //muestro con la key devuelta el gusto de la empanada y lo mismo con la cantidad
                            ))}
                        </ul> {/*lo pongo en modo de lista */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaEmpXpersona;
