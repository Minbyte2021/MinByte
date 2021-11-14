import Casita from "./Casita.png";

const Home = ({ isLoggedIn, carrito, setCarrito }) => {
  return (
    <div align="center">
      <img src={Casita} width="850" height="850" alt="Casita"></img>
    </div>
  );
};

export default Home;
