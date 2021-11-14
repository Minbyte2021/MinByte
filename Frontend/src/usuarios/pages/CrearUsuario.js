import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import UsuariosForm from "../components/UsuariosForm";

const CrearUsuario = ({ usuarios, setUsuarios }) => {
  const rol = [
    { id: 1, nombre: "Sin registrar" },
    { id: 2, nombre: "Vendedor" },
    { id: 3, nombre: "Administrador" },
  ];

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [newUsuario, setNewUsuario] = useState({
    Documento: 0,
    NombreApellido: "",
    Telefono: 0,
    Correo: "",
    Sucursal: "",
    Rol: "",
  });

  const handleChange = (event) => {
    setNewUsuario({ ...newUsuario, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.usuarios.create(newUsuario);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setNewUsuario([...usuarios, newUsuario]);
      //history.push("/");
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center mt-5 mb-5">Asignacion de Usuarios</h1>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <UsuariosForm
              handleChange={handleChange}
              handleClick={handleClick}
              formValue={newUsuario}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CrearUsuario;
