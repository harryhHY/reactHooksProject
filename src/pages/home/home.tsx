import React, { useEffect, useState, useContext, createContext } from "react";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Marqueecom from "./components/marquee";
import Changefather from './components/changefather';

const marqueedata = [
  {
    text: 11111,
  },
  {
    text: 22222,
  },
];
const Home = () => {
  const [marqueelist,setmarqueelist]:any = useState([]);
  const [sisters,setsisters]=useState('村里一朵花')
  useEffect(()=>{
    setmarqueelist(marqueedata)
  },[])
  return (
    <>
      <Header></Header>
        <Marqueecom data={marqueedata}></Marqueecom>
        <Changefather sisters={sisters} setsisters={setsisters}></Changefather>

      <Footer></Footer>
    </>
  );
};
export default Home;
