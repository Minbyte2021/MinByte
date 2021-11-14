import Card from "react-bootstrap/Card";
import CardFooter from "./CardFooter";

const Ventas = ({ ventas, isLoggedIn, venta, carrito, setCarrito }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ventas.url} />
      <Card.Body>
        <Card.Title>{ventas.title}</Card.Title>
        <Card.Text>{ventas.description}</Card.Text>
        <CardFooter
          id={ventas.id}
          precio={ventas.price}
          categoria={ventas.categoria}
          isLoggedIn={isLoggedIn}
          ventas={venta}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      </Card.Body>
    </Card>
  );
};

export default Ventas;
