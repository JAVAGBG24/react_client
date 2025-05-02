import "../styles/home.css";
import CartCircle from "../icons/CartCircle";
import Button from "../components/Button";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="home">
      <div className="grid">
        <div className="img-1"></div>
        <div className="img-2"></div>
        <div className="img-3"></div>
        <div className="text">
          Dress to impress - Fashion that speaks for you.
          <span>
            <CartCircle />
            <span className="box">
              <Button text="Shop Now" />
            </span>
          </span>
        </div>
      </div>
      <div className="banner">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
