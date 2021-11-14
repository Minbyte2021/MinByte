import Card from "react-bootstrap/Card";
import CardFooter from "./CardFooter";

const Usuarios = ({ usuarios, isLoggedIn, usuario, carrito, setCarrito }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={usuarios.url} />
      <Card.Body>
        <Card.Title>{usuarios.title}</Card.Title>
        <Card.Text>{usuarios.description}</Card.Text>
        <CardFooter
          id={usuarios.id}
          documento={usuarios.Documento}
          nombreapellido={usuarios.NombreApellido}
          telefono={usuarios.Telefono}
          correo={usuarios.Correo}
          sucursal={usuarios.Sucursal}
          roles={usuarios.Rol}
          isLoggedIn={isLoggedIn}
          usuario={usuario}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      </Card.Body>
    </Card>
  );
};

export default Usuarios;
