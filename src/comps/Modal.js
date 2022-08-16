import React from 'react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Modal = ({selectedImg,setSelectedImg}) => {

    const handleChange = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

  return (
    <motion.div className='backdrop' onClick={handleChange} 
     initial={{opacity: 0}} animate={{opacity: 1}}>
       <motion.img src={selectedImg} alt="enlarge img" initial={{y:"-100vh" }} animate={{y:0}}/>
    </motion.div>
  )
}

export default Modal