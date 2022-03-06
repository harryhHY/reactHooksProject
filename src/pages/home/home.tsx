import { useEffect, useState } from "react";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Marqueecom from "./components/marquee";
import Changefather from "./components/changefather";

const marqueedata = [
  {
    text: 11111,
  },
  {
    text: 22222,
  },
];

const Home = () => {
  const [marqueelist, setmarqueelist]: any = useState([]);
  const [sisters, setsisters] = useState("村里一朵花");
  const [loding, setloding] = useState(false); //loding
  const changeloding = () => {
    setloding(true);
    setTimeout(() => {
      setloding(false);
    }, 1000);
  };
  useEffect(() => {
    setmarqueelist(marqueedata);
  }, []);
  return (
    <>
      <Header headeractive={1}></Header>
      <Marqueecom data={marqueedata}></Marqueecom>
      <Changefather sisters={sisters} setsisters={setsisters}></Changefather>
      <div className="buttondiv">
        <span>这是一个小小的button</span>
        <div className="lodingdiv" style={loding ? {} : { display: "none" }}>
          <div className="loding" ></div>
        </div>
      </div>
      <button
        onClick={() => {
          changeloding();
        }}
      >
        changeloding
      </button>
      <Footer></Footer>
    </>
  );
};
export default Home;
