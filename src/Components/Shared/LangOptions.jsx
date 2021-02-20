import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { localesCode } from "../../lang/constants";
// import { useToggle } from "../../Hooks/index";
// import {FcGlobe} from "react-icons/fc"

const LangOptions = () => {
  // const { isTrue, toggleValue, setFalse, setTrue } = useToggle(false);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.locale);

  const handleChange = (code) => {
    dispatch({ type: "SET_LANG", lang: code });
  };

  return (
    <div className="LangOptions">
      <div className="LangOptions__img BG">
          <div>
          {localesCode.map((item, index) => ( 
            <a key={index} onClick={() => handleChange(item.code)} >
              {item.name} 
            </a>
          ))}
          </div>
         
      </div>
      

      {/* <div className="select-lang">
        <select name="slct" id="slct">
          {localesCode.map((item, index) => ( 
           <option key={index} onClick={() => handleChange(item.code)} value={item.code}> {item.name} </option>
            ))}
        </select>
      </div> */}

    </div>
  );
};

export default LangOptions;
