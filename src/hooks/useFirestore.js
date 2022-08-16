import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const useFirestore = (collection) => {
    const [data,setData] = useState([]);

    useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap)=>{
        let docs = [];
        snap.forEach(doc => {
            docs.push({...doc.data(), id: doc.id})
        })
        setData(docs);
      })
      return ()=> unsub();
    }, [collection])
    

    return { data };
}

export default useFirestore;