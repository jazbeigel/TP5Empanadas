import React, { useState } from 'react';
import ListaEmpGustos from './componentes/ListaEmpGustos';
import ListaEmpXpersona from './componentes/ListaEmpXpersona';
import './App.css';
import Forms from './componentes/Form';

function App() {
    const [pedidos, setPedidos] = useState([]); //[] vector donde voy guardando pedidos (con objetos dentro)

    const agregarPedido = (nuevoPedido) => {
        setPedidos([...pedidos, nuevoPedido]); //nuevo pedido es recibido, y por setPedidos agrego otro mas a mi vector
    };

    return (
        <div>
            <h1>Pedido de Empanadas</h1>
            <Forms agregarPedido={agregarPedido /*le mando la funcion de app.jsx de agregar pedido, y la vinculo con la de Forms.jsx */ }/>
            <ListaEmpGustos pedidos={pedidos /*pedidos1 es el nombre de la propiedad que el componente de listaempGustos espera, el pedidos2 es mi variable de app.jsx*/} />
            <ListaEmpXpersona pedidos={pedidos /*pedidos1 es el nombre de la propiedad que el componente de listaempXpersona espera, el pedidos2 es mi variable de app.jsx*/} />
        </div>
    );
}

export default App;
