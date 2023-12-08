import TabBtn from './TabBtn';
import { useState } from 'react';

export default function TabBtns({ children}) {
 const [showText, setShowText] = useState("Choice Button !");
 function Show() {
setShowText({children})
 }
    return (
        <>
        <menu>
            <TabBtn onClick={()=>Show({children})}>Content</TabBtn>
            <TabBtn onClick={()=>setShowText({children})}>Art</TabBtn>
            <TabBtn onClick={()=>setShowText({children})}>Specification</TabBtn>
        </menu>
       <p>
        {showText}
        </p> 
        </>
    );
    }