import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { TRAVEL_DATA } from "./js/data";
const Travel = () => {
  return (
    <>
      <Header headeractive={3}></Header>
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
    </>
  );
};
export default Travel;
