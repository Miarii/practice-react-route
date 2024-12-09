import { Outlet, useNavigate } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      {location.pathname === "/" && <Banner></Banner>}
      {navigate.state === "loading" ? <p className="text-center text-7xl text-black">Loading...</p> : ""}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;