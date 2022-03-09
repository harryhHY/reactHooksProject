import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { bookdata } from "./js/data";
const Read = () => {
  return (
    <>
      <Header headeractive={4}></Header>
      <div className="bookdiv">
        {bookdata.map((item, index) => {
          return (
            <div
              key={item.id + index}
              className={`booklist animate__animated ${item.classname}`}
            >
              <div className="centerimg">
                <img src={item.imgsrc} alt={item.name} />
              </div>
              <div className="read_name">{item.name}</div>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
};
export default Read;
