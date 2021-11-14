import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Zapatos1 = ({ Zapatos }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <center>
          <h2>{Zapatos.marca}</h2>
        </center>
      </Card.Header>
      <Card.Img
        variant="top"
        src={Zapatos.url}
        width={300}
        height={300}
        alt="300x300"
        rounded
      />
      <Card.Body>
        <Card.Title>{Zapatos.title}</Card.Title>
        <Card.Text>{Zapatos.description}</Card.Text>
        <Button variant="danger" size="sm">
          ${Zapatos.price}
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="danger" size="sm">
          {Zapatos.category}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Zapatos1;
