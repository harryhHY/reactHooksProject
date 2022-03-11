import { useEffect, useState } from "react";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Changefather from "./components/changefather";

const Home = () => {
  const [sisters, setsisters] = useState("村里一朵花");
  const [loding, setloding] = useState(false); //loding
  const changeloding = () => {
    setloding(true);
    setTimeout(() => {
      setloding(false);
    }, 1000);
  };
  return (
    <div className="home">
      <div className="home_div">
        <Header headeractive={1}></Header>
        <Changefather sisters={sisters} setsisters={setsisters}></Changefather>
        <div className="buttondiv">
          <span>这是一个小小的button</span>
          <div className="lodingdiv" style={loding ? {} : { display: "none" }}>
            <div className="loding"></div>
          </div>
        </div>
        <button
          onClick={() => {
            changeloding();
          }}
        >
          changeloding
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Home;
