import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Marqueecom from "./components/marquee";
import { TRAVEL_DATA, marqueedata } from "./js/data";
import { useEffect, useState } from "react";
import mergeClass from "../../utils/mergeClass";
const Travel = () => {
  const [positionFlag, setpositionFlag] = useState(false);
  let valueTop = 0;
  let scrollTop = 0;
  const getWindowSize = () => {
    let h5Scroll = {
      scrollTop: 0,
    };
    if (document?.documentElement && document?.documentElement?.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document?.body) {
      scrollTop = document.body.scrollTop;
    }
    setTimeout(() => {
      valueTop = scrollTop;
    }, 0);
    if (valueTop < scrollTop) {
      // console.log("向下");
      setpositionFlag(false);
    }
    if (valueTop > scrollTop) {
      // console.log("向上");
      setpositionFlag(true);
    }
    return h5Scroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", getWindowSize);
    return () => {
      window.removeEventListener("scroll", getWindowSize);
    };
  }, []);

  return (
    <div className="travel">
      <Header headeractive={3}></Header>
      <div
        className={mergeClass({
          ceiling: positionFlag,
          noneceiling: !positionFlag,
        })}
      >
        <Marqueecom data={marqueedata}></Marqueecom>
      </div>
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
