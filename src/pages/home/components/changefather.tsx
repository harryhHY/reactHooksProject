import{ useState } from "react";
import Countdown from "react-countdown";
import dayjs from "dayjs";

interface sister {
  sisters: string;
  setsisters: any;
}
const Changeyears = (props: sister) => {
  const { sisters, setsisters } = props;
  const [Cdtime,setCdtime]=useState(dayjs(1649999957832).valueOf())
  return (
    <>
      <Countdown date={Cdtime} 
       renderer={time => {
         const {days,hours,minutes,seconds} = time.formatted
         return (
           <div>
             还有{days}天{hours}时{minutes}分{seconds}秒
           </div>
         )
       }}
      />
      <div className="animate__flash">{sisters}</div>
      <button onClick={() => setsisters("老太婆")}>时间的变迁</button>
    </>
  );
};
export default Changeyears;
