import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistroDeUsuarios = () => {
  const [usuario, setUsuario] = useState();
  const [contraseña, setContraseña] = useState();

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  return (
    <div>
      <h2>Registro de Usuarios</h2>
      <div>
        <label>Usuario:</label>
        <input className="bloque" type="text" value={usuario} onChange={handleUsuarioChange} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input className="bloque" type="password" value={contraseña} onChange={handleContraseñaChange} />
      </div>
      <br />
      <button> <Link id="link" to="/iniciofunctions">Registrarse</Link></button>
      <br/>
      <h3> <Link to="/paginaPrincipal"> Para volver atrás , haz click en este mensaje </Link> </h3>
    </div>
  );
};

export default RegistroDeUsuarios;
