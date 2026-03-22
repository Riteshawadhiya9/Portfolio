import { motion , AnimatePresence } from "framer-motion";
import React from "react";
import { useMemo , useState , useEffect} from "react";

const IntroAnimation = ({ onFinish }) => {
  const greeting = useMemo(() => [
      "Hello",
      "Hola",
      "Bonjour",
      "Hallo",
      "Ciao",
      "안녕하세요",
      "Привет",
      "Olá",
      "こんにちは",
      "नमस्ते",
    ],[]);

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(()=>{
      if(index < greeting.length-1){
        const id = setInterval(()=> setIndex((i) => i+1), 180);
        return () => clearInterval(id);
      }else{
        const t = setTimeout(()=> setVisible(false), 300);
        return () => clearTimeout(t);
      }
    },[index, greeting.length])

    useEffect(() => {
      if (!visible && onFinish) {
        onFinish();
      }
    }, [visible, onFinish])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
        
        initial = {{y:0, opacity: 1}}
        exit={{y: "-100%", 
          opacity: 0,
          transition : {
            duration : 1.5,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        }}
        >

          <motion.h1 
          key={index}
          className="text-5xl md:text-7xl lg:text-8xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          exit={{opacity:0, y:-20}}
          
          >
            {greeting[index]}

          </motion.h1>

        </motion.div>
      )} 

    </AnimatePresence>
  )
};

export default IntroAnimation;
