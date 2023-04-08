import { useState } from "react";
import { ArrowDown, ArrowUp } from "../Icon";
const Accardion = ({ Data }) => {
  const [Accardion, setAccardion] = useState(Data);
  let FooterAccardionHandler = (id, e) => {
    let Temp = [...Data];
    if (Accardion[id].isAccardionOpen) {
      Temp[id].isAccardionOpen = false;
      Temp[id].accardionContentHeight = `${0}`;
    } else {
      Temp[id].isAccardionOpen = true;
      Temp[
        id
      ].accardionContentHeight = `${e.currentTarget.nextElementSibling.scrollHeight}`;
    }
    setAccardion(Temp);
  };
  return (
    <>
      {Accardion &&
        Accardion.map((item, index) => (
          <>
            <div
              key={index}
              className="flex justify-between items-center p-2"
              onClick={(e) => {
                FooterAccardionHandler(index, e);
              }}
            >
              <h3 className="text-white">{item.title}</h3>
              <ArrowDown />
            </div>
            {item.isAccardionOpen ? (
              <div
                style={{
                  transitionDuration: `${item.accardionContentHeight * 3}ms`,
                  height: `${Number(item.accardionContentHeight)}px`,
                }}
                className={`flex flex-col text-white gap-2 pl-4 overflow-hidden transition-all [&>*:last-child]:pb-4`}
                key="acc"
              >
                {item.accardionContent.map((accardion, index) => (
                  <a key={index}>
                    <span>{accardion}</span>
                  </a>
                ))}
              </div>
            ) : (
              <div
                style={{ transitionDuration: `${800}ms`, height: `0px` }}
                className={`flex flex-col text-white gap-2 pl-4 overflow-hidden transition-all [&>*:last-child]:pb-4`}
                key="acc"
              >
                {item.accardionContent.map((accardion,index) => (
                  <a key={index}>
                    <span>{accardion}</span>
                  </a>
                ))}
              </div>
            )}
          </>
        ))}
    </>
  );
};
export default Accardion;
/*

              Accardion.map((item , id)=>
                <>
                  {
                    item.isAccardionOpen ?                   <div className={`flex flex-col text-white gap-1 pl-4 overflow-hidden transition-all duration-[.3s]`} style={{height : `${item.accardionContentHeight}px`}}> 
                    {
                      item.accardionContent.map((accardion)=>
                      <a>
                        <span>
                          {
                            accardion
                          }
                        </span>
                      </a>)
                    }
                  </div> :                   <div className="flex flex-col text-white gap-1 pl-4 overflow-hidden h-0 transition-all duration-[.3s]"> 
                    {
                      item.accardionContent.map((accardion)=>
                      <a>
                        <span>
                          {
                            accardion
                          }
                        </span>
                      </a>)
                    }
                  </div>
                  }
                </>
              )



*/
