import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const VentasForm = ({ handleChange, handleClick, categorias, formValue }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Fecha Venta</Form.Label>
        <Form.Control
          type="text"
          name="Fecha_Venta"
          onChange={handleChange}
          value={formValue.Fecha_Venta}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Producto</Form.Label>
        <Form.Control
          type="text"
          name="Producto"
          onChange={handleChange}
          value={formValue.Producto}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Referencia</Form.Label>
        <Form.Control
          type="text"
          name="Referencia"
          onChange={handleChange}
          value={formValue.Referencia}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="Precio"
          onChange={handleChange}
          value={formValue.Precio}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          name="Descripcion"
          style={{ height: "50px" }}
          onChange={handleChange}
          value={formValue.Descripcion}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Sucursal</Form.Label>
        <Form.Control
          type="text"
          name="Sucursal"
          onChange={handleChange}
          value={formValue.Sucursal}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Vendedor</Form.Label>
        <Form.Control
          type="text"
          name="Vendedor"
          onChange={handleChange}
          value={formValue.Vendedor}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="Categoria"
          onChange={handleChange}
          value={formValue.categoria}
        >
          <option>Seleccione una categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria._id} value={categoria._id}>
              {categoria.nombre}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Check
          type="checkbox"
          id="default-checkbox"
          label="Confirmada"
          name="disponible"
          value={formValue.disponible}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="button" variant="danger">
        Cancelar
      </Button>
      <Button
        onClick={handleClick}
        type="button"
        variant="danger"
        className="float-end"
      >
        Guardar
      </Button>
    </Form>
  );
};

export default VentasForm;
