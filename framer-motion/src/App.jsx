import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        drag
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
        className="box"
      >
        Hey, Yar
      </motion.div>
    </div>
  );
};

export default App;
