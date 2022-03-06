import Marquee from "react-fast-marquee";
const Marqueecom = (props: { data: any; }) => {
    const {data}= props;
    
  return(
    <>
    <Marquee pauseOnHover={true} speed={60} loop={0} gradient={false}>
      {data.map((item:any) => (
        <span className="red" key={item.text}>{item.text}</span>
      ))}
    </Marquee>
  </>
  )
};
export default Marqueecom;
