import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Marqueecom from "./components/marquee";
import { TRAVEL_DATA, marqueedata } from "./js/data";

const Travel = () => {
  return (
    <div className="travel">
      <Header headeractive={3}></Header>
      <Marqueecom data={marqueedata}></Marqueecom>
      <main>
        {TRAVEL_DATA.map((item, index) => {
          return (
            <div
              key={index}
              className={`travel_div animate__animated ${item.classname}`}
            >
              <img src={item.imgsrc} alt="" />
            </div>
          );
        })}
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Travel;
