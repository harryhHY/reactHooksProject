import{ useEffect, useState ,useImperativeHandle,forwardRef} from "react";
import Countdown from "react-countdown";
import dayjs from "dayjs";

interface sister {
  sisters: string;
  setsisters: any;
  handleChildData:any;
  cRef:any
}
let Changeyears = (props: sister):any => {
  const { sisters, setsisters,handleChildData,cRef } = props;
  const [Cdtime,setCdtime]=useState(dayjs(1649999957832).valueOf())
  const [childtext , setchildtext ] = useState('')
    useImperativeHandle(cRef, () => ({
      childFun (info: any) {
      console.log(info)
      },
      fun2(){
      console.log('fun2')
      }
      }));
  useEffect(()=>{
    handleChildData(childtext)
  },[childtext])
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
      <div onClick={()=>{
        setchildtext('今天给爸爸洗脚')
      }}>传给父组件值</div>
      <div onClick={()=>{
        setchildtext('今天不给爸爸洗脚')
      }}> 第二次传给父组件的值</div>
      <div className="animate__flash">{sisters}</div>
      <button onClick={() => setsisters("老太婆")}>时间的变迁</button>
    </>
  );
};

Changeyears = forwardRef(Changeyears);

export default Changeyears;
