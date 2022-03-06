import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { bookdata } from "./js/data";
const Read = () => {
  return (
    <>
      <Header headeractive={4}></Header>
      <div className="bookdiv">
        {bookdata.map((item) => {
          return (
            <>
              <div key={item.id} className="booklist">
                <div className="centerimg">
                  <img src={item.imgsrc} alt="" />
                </div>
                <div className="read_name">{item.name}</div>
              </div>
            </>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
};
export default Read;
