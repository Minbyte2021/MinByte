import Zapatos1 from "../components/Zapatos";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Zapatos = [
    {
        id : "36202",
        title: "Camisa de Jean",
        description: "Camisa en tela de jean manga larga para hombre de color azul",
        price: 80000,
        category: "Talla M",
        url:"https://imageshack.com/i/pnf0RSbhj", 
    },
    {
        id: "13151",
        // marca : "Dolce & Gabbana",
        title: "Camisa de cuadros rojos",
        description: "Camisa casual de cuadros rojos manga larga para hombre",
        price: 85000,
        category: "Talla M",
    url: "https://imageshack.com/i/pmSBuUYoj",
    },
    {
        id: "28378",
        //marca : "Dolce & Gabbana",
        title: "Camisa estampada",
        description: "Camisa negra estampada manga corta para hombre",
        price:95000,
        category: "Talla L",
        url: "https://imageshack.com/i/pmObTKPHj",
    },
    {
        id: "92722",
        //marca : "Dolce & Gabbana",
        title: "Camisa formal unicolor",
        description: "Camisa formal de manga larga blanca para hombre",
        price: 100000,
        category: "Talla M",
        url: "https://imageshack.com/i/pnuIrcPaj",
    },
    {
        id: "93047",
        //marca : "Dolce & Gabbana",
        title: "Camisa formal de rayas rosa",
        description: "Camisa formal de manga larga rosa para hombre",
        price: 100000,
        category: "Talla M",
        url: "https://imageshack.com/i/pn5FEPbcj",
    },
    {
        id: "22339",
        //marca : "Dolce & Gabbana",
        title: "Camisa casual azul",
        description: "Camisa casual manga corta azul para hombre",
        price: 90000,
        category: "Talla M",
        url: "https://imageshack.com/i/pnUz5iqCj",
    },
    {
        id: "24852",
        //marca : "Givenchy",
        title: "Camisa casual estampada",
        description: "Camisa casual estampada manga corta azul para hombre ",
        price: 85000,
        category: "Talla L",
        url: "https://imageshack.com/i/pnK5eXu7j",
    },
    {
        id: "46574",
        //marca : "Givenchy ",
        title: "Camisa casual leñadora",
        description: "Camisa casual leñadora manga larga verde para hombre",
        price: 110000,
        category: "Talla M",
        url: "https://imageshack.com/i/poO7OYwcj",
    },
    {
        id: "16824",
        //marca : "Givenchy ",
        title: "Camisa casual estampada",
        description: "Camisa casual estampada manga larga negra para hombre ",
        price: 83000,
        category: "Talla L",
        url: "https://imageshack.com/i/pmnCqa4Gj",
    },
];


  return (
    <Container>
      <Row>
        {Zapatos.map((zapato) => (
          <Col xs={4}>
            <Zapatos1 Zapatos={zapato} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;
