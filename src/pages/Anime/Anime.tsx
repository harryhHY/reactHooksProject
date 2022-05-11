import React, { Component } from "react";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { datajs } from "./js/data";
class Anime extends Component {
  render() {
    return (
      <div>
        <Header headeractive={5}></Header>
        <div className="animebox">
          {datajs.map((item) => {
            return (
              <div key={item.id} className="animediv">
                <div className="centerimg">
                  <img src={item.src} alt="" />
                </div>
                  <div className="animetext">{item.name}</div>
              </div>
            );
          })}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Anime;
