
import Header from "../../components/header/index";
import Footer from '../../components/footer/index'
import { useEffect } from "react";
const Cookie = () => {
  return (
    <>
      <Header headeractive={2}></Header>
      <div className="cookie" style={{height:' calc(100vh - 58px - 78px)'}}>
        
      </div>
      <Footer></Footer>
    </>
  );
};
export default Cookie;