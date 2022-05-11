import { useCallback, useEffect, useState, useRef } from "react";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Changefather from "./components/changefather";

const Home = () => {
  const [sisters, setsisters] = useState("村里一朵花");
  const [loding, setloding] = useState(false); //loding;
  const [childData, setChildData]: any = useState(); //获取子组件的值
  const childMethodRef:any = useRef();
  const changeloding = () => {
    setloding(true);
    setTimeout(() => {
      setloding(false);
    }, 1000);
  };
  const getchildfn = useCallback((data: any) => {
    setChildData(data);
  }, []);
  return (
    <div className="home">
      <div className="home_div">
        <Header headeractive={1}></Header>
        <Changefather
          sisters={sisters}
          setsisters={setsisters}
          handleChildData={getchildfn}
          cRef={childMethodRef}
        ></Changefather>
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
        {<div>这是子组件的值{childData}</div>}
        <input type="number" placeholder="555" />
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Home;
