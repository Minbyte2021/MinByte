import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../api";
import "./Gestion.css";

const VentasRealizadas = ({ ventas, setNewVenta }) => {
  const deleteVentas = (event) => {
    const id = event.target.id;
    api.ventas.delete(id);
    const newVentas = ventas.filter((ventas) => ventas._id !== id);
    setNewVenta([...newVentas]);
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-11">Gestión de Ventas</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha Ventas</th>
              <th>Producto</th>
              <th>Referencia</th>
              <th>Precio</th>
              <th>Descripcion</th>
              <th>Sucursal</th>
              <th>Vendedor</th>
              <th>Categoria</th>
              <th>Editar/Borrar</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => {
              return (
                <tr key={venta._id}>
                  <td>{venta.Fecha_Venta}</td>
                  <td>{venta.Producto}</td>
                  <td>{venta.Referencia}</td>
                  <td>{venta.Precio}</td>
                  <td>{venta.Descripcion}</td>
                  <td>{venta.Sucursal}</td>
                  <td>{venta.Vendedor}</td>
                  <td>{venta.Categoria}</td>
                  <td>
                    <Link to={`/VentasRealizadas/Edit/${venta._id}`}>
                      <Button variant="warning">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </Button>
                    </Link>

                    <Button
                      variant="danger"
                      onClick={deleteVentas}
                      id={venta._id}
                      className="ms-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <input
            type="text"
            class="form-control"
            variant="danger"
            className="float-start"
            Buscar
          />
          <Button type="button" variant="danger" className="float-start">
            {" "}
            Buscar{" "}
          </Button>
        </Table>
      </Container>
    </div>
  );
};

export default VentasRealizadas;
