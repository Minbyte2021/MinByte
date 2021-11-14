import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UsuariosForm = ({ handleChange, handleClick, formValue }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Documento</Form.Label>
        <Form.Control
          type="number"
          name="Documento"
          onChange={handleChange}
          value={formValue.Documento}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control
          type="text"
          name="NombreApellido"
          onChange={handleChange}
          value={formValue.NombreApellido}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="number"
          name="Telefono"
          onChange={handleChange}
          value={formValue.Telefono}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="text"
          name="Correo"
          onChange={handleChange}
          value={formValue.Correo}
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
        <Form.Label>Rol</Form.Label>
        <Form.Control
          type="text"
          name="Rol"
          onChange={handleChange}
          value={formValue.Rol}
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

export default UsuariosForm;
