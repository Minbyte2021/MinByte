import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import VentasForm from "../components/VentasForm";

const EditarVenta = ({ ventas, setVentas }) => {
  const history = useHistory();
  const categorias = [
    { id: 1, nombre: "Moderno" },
    { id: 2, nombre: "Informal" },
    { id: 3, nombre: "Bohemio" },
    { id: 4, nombre: "Clasico" },
    { id: 5, nombre: "Deportes" },
    { id: 6, nombre: "Elegante" },
    { id: 7, nombre: "Casual" },
    { id: 8, nombre: "Juvenil" },
  ];
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { ventasId } = useParams();

  const [newVenta, setNewVenta] = useState({
    Fecha_Venta: "",
    Producto: "",
    Referencia: 0,
    Precio: 0,
    Descripcion: "",
    Sucursal: "",
    Vendedor: "",
    Categoria: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.ventas.getVentas(ventasId);
      setNewVenta(response);
    };

    fetchData();
  }, [ventasId]);

  const handleChange = (event) => {
    setNewVenta({ ...newVenta, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.ventas.edit(newVenta);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setNewVenta([...ventas, newVenta]);
      history.push("/VentasRealizadas");
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center mt-5 mb-5">Editar Venta</h1>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={8}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <VentasForm
              handleChange={handleChange}
              handleClick={handleClick}
              categorias={categorias}
              formValue={newVenta}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditarVenta;
