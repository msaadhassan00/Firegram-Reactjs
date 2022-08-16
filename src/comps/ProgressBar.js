import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = useStorage(file);
    
    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile])

  return (
    <motion.div className="progress-bar" initial={{width:0}} animate={{width:progress + '%'}} />
  )
}

export default ProgressBar