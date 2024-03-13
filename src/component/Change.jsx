import { useState } from "react";
import Text from "./Text"


function Change() {
    const [count, setCount] = useState(0);

    const textHandler = (text) => {
    setCount(text.target.value.length);
      };
   
    return(
        <>
            <h3>{count}</h3>
            <Text type="text" onChange={textHandler}/>
        </>
        
    )
}

export default Change;




