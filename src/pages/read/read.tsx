import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { bookdata } from "./js/data";
import { chunk } from "lodash";
import { useEffect, useState } from "react";
import Image from "react-image-webp";

const Read = () => {
  const [newDataList, setDataList]: any = useState([]);
  //重组数组
  const changeDataList = () => {
    const num = Math.floor(
      (document.documentElement.scrollLeft +
        document.documentElement.clientWidth) /
        159
    );
    const data = chunk(bookdata, num);
    setDataList(data);
  };
  //获取当前窗口大小
  const getWindowSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const handleResize = () => {
    setWindowSize(getWindowSize());
  };
  useEffect(() => {
    // 监听
    window.addEventListener("resize", changeDataList);
    //初始化加载
    changeDataList();
    // 销毁
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="read">
      <Header headeractive={4}></Header>
      <div className="bookdiv">
        {newDataList.map((item: any, index: any) => {
          return (
            <div className="bookdiv_child" key={index}>
              {item.map((itemchild: any) => {
                return (
                  <div
                    key={itemchild.id + index}
                    className={`booklist animate__animated ${itemchild.classname}`}
                  >
                    <div className="centerimg">
                      <Image
                        src={itemchild.imgsrc}
                        webp={itemchild.img2src}
                      />
                    </div>
                    <div className="read_name">{itemchild.name}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Read;
