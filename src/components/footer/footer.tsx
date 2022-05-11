import React,{useState} from "react";
import copy from "copy-to-clipboard";
import { Affix, message } from 'antd';
const Footer = () => {
  const linkloca = "https://blog.csdn.net/HarryHY";
  const copyfn = (linkloca: string) => {
    copy(linkloca, { debug: true, message: "Press #{key} to copy" });
    message.success(`复制成功 ${linkloca}`);
  };
  const goBackTop=()=>{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <div className="footerdiv">
        <span>Blog:</span>
        <a href={linkloca} target="_blank">
          {linkloca}
        </a>
        <span
          className="copyspan"
          onClick={() => {
            copyfn(linkloca);
          }}
        >
          复制
        </span>
        <Affix   style={{ position: 'fixed', bottom: 100, right: 25 }}>
          <div className="backtop" onClick={()=>goBackTop()}>
           
          </div>
        </Affix>
      </div>
    </>
  );
};
export default Footer;
