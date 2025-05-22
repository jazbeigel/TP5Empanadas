const Sector = ({ setSector }) => {
    return (
        <select name="sector" onChange={(e) => setSector(e.target.value)} required> {/*cuando cambie el valor del sector que elige, automaticamente se carga en setSector*/}
            <option value="">Seleccione</option>
            <option value="Sistemas">Sistemas</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Ventas">Ventas</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Soporte">Soporte</option>
            <option value="Depósito">Depósito</option>
        </select>
    );
};

export default Sector;

