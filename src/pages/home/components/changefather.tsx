import React, { useEffect, useState, useContext, createContext } from "react";
import Countdown from "react-countdown";
import dayjs from "dayjs";

interface sister {
  sisters: string;
  setsisters: any;
}
const Changeyears = (props: sister) => {
  const { sisters, setsisters } = props;
  const [Cdtime,setCdtime]=useState(dayjs(1645999957832).valueOf())
  return (
    <>
      <Countdown date={Cdtime} />
      <div className="animate__flash">{sisters}</div>
      <button onClick={() => setsisters("老太婆")}>时间的变迁</button>
    </>
  );
};
export default Changeyears;
