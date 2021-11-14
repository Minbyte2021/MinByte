import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import UsuariosForm from "../components/UsuariosForm";

const EditarUsuario = ({ usuarios, setUsuarios }) => {
  const history = useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { usuariosId } = useParams();

  const [newUsuario, setNewUsuario] = useState({
    Documento: 0,
    NombreApellido: "",
    Telefono: 0,
    Correo: "",
    Sucursal: "",
    Rol: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.usuarios.getUsuarios(usuariosId);
      setNewUsuario(response);
    };

    fetchData();
  }, [usuariosId]);

  const handleChange = (event) => {
    setNewUsuario({ ...newUsuario, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.usuarios.edit(newUsuario);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      history.push("/TablaGestorUsuario");
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center mt-5 mb-5">Editar Usuario</h1>
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

export default EditarUsuario;
