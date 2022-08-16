import React from "react";
import useFirestore from "../hooks/useFirestore";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const ImgGrid = ({ setSelectedImg }) => {
  const { data } = useFirestore("images");
  console.log(data);

  return (
    <div className="img-grid">
      {data &&
        data.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
            whileHover={{opacity: 1}}
            layout
          >
            <motion.img src={doc.url} alt="img"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
             />
          </motion.div>
        ))}
    </div>
  );
};

export default ImgGrid;
