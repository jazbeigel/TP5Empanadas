import './styles/form.css';
import { useState } from 'react';
import Sector from './componentes del form/Sectores'; //me traigo los sectores para poder mostrarlos en las opciones

const Forms = ({ agregarPedido }) => { //aca recibo la funcion que pase desde App.jsx
    const [nombre, setNombre] = useState('');
    const [sector, setSector] = useState('');
    const [empanadas, setEmpanadas] = useState([{ gusto: '', cantidad: '' }]);
    //cree estados de cada parte del form que tengo que cmpletar, se van a usar todos abajo en el return
    const agregarEmpanada = () => {
        setEmpanadas([...empanadas, { gusto: '', cantidad: '' }]);
    }; //haciendo click en Otra empanada, venis a aca, a agregar un campo de gustos y cantidades mas, y copiar (...empanadas) lo que ya habia

    const handleEmpanadaChange = (index, campo, value) => { //el index la posicion de la empanada que estoy cmabiando
        const nuevasEmpanadas = [...empanadas]; //copia las que estaban antes
        nuevasEmpanadas[index][campo] = value; //value, siendo el nuevo valor que el usuario elije, lo asigna en cada campo de nuevasEmpanadas[index=el id de la empanada que esta cambiando][campo=puede ser el gusto o la cantidad]
        setEmpanadas(nuevasEmpanadas); //vuelve a guardar el array actualizaado (nuevasEmpanadas) en empanadas con setEmpanadas
    };

    const handleSubmit = (e) => {
        e.preventDefault();//hace que no recargue la pagina

        const pedido = { //creo un objeto con lo que me pide el form construyendo el pedido completo
            nombre,
            sector, // de los que traje arriba
            empanadas: empanadas.map(e => ({ gusto: e.gusto, cantidad: parseInt(e.cantidad) })) //empanadas siendo un array con 2 campos: gustos (string) y cantidades (string --> por eso el parseint)
        };

        agregarPedido(pedido); //llama a la funcion de agregar pedido que traje desde App.jsx, y le mando el pedido que cree arriba

        // Limpiar form
        setNombre('');
        setSector('');
        setEmpanadas([{ gusto: '', cantidad: '' }]);
    };

    return (
        <form onSubmit={handleSubmit}> {/* vincula la funcion de arriba con en form. Cuando toque el boton de enviar, va a reiniciar el form, y agregar mi nuevo pedido a mi vector */}
        
            <label>Nombre</label>
            <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required /> {/*el value={nombre} es el estado que cree arriba, lo estaria completando aca*/}

            <label>Sector</label>
            <Sector setSector={setSector} /> {/*Sector (verde) es lo que traigo de componentes del form, setSector es la propiedad que creo a la cual le asigno el valor que traigo del setSector (amarillo)*/}

            <label>Empanadas</label>
            {empanadas.map((empanada, index) => (
                <div key={index}>
                    <select value={empanada.gusto} onChange={(e) => handleEmpanadaChange(index, 'gusto', e.target.value)} required>
                        <option value="">Seleccione gusto</option>
                        <option value="Carne">Carne</option>
                        <option value="Pollo">Pollo</option>
                        <option value="Jamón y Queso">Jamón y Queso</option>
                        <option value="Capresse">Capresse</option>
                        <option value="Humita">Humita</option>
                    </select>
                    <input type="number" min="1" value={empanada.cantidad} placeholder='Seleccione la cantidad' onChange={(e) => handleEmpanadaChange(index, 'cantidad', e.target.value)} required /> {/*Cuando cambie la cantidad que se puede cambiar en este input, se le manda por (e) => handleEmpanadaChange(index, 'cantidad', e.target.value) que tiene que cambiar el valor del campo de cantidad en el estado que cree arriba de empanadas*/}
                </div>
            ))}

            <button type="button" onClick={agregarEmpanada}>Otra empanada</button> {/*boton donde ejecuto la funcion que me hacia agregar un input mas de empanadas con sus 2 campos.*/}
            <button type="submit">Enviar Pedido</button>
        </form>
    );
};

export default Forms;
