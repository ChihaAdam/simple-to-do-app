import { getFromLocal,setToLocal } from "../localStorage";
import { useState,useEffect} from "react";

function useLocalStorage(key,info){
    const [item,setItem]=useState(
        ()=>{
            const local=getFromLocal(key);
            if (local) 
                return local;
            return info;
        }
    );
    useEffect(()=>setToLocal(key,item),[item]);
    return [item,setItem];
}

export {useLocalStorage}