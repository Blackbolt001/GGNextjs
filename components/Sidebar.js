import { motion } from "framer-motion"

export const MyComponent = ({ isVisible }) => (




    
    <motion.div animate={{
         opacity: isVisible ? 1 : 0, 
         x:0,
         y:0,
         scale: 1,
         rotate: 0,
        
        }} />
)
{items.map(item => (
    <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
    </motion.div>
  ))}
  
  <AnimatePresence>
    {selectedId && (
      <motion.div layoutId={selectedId}>
        <motion.h5>{item.subtitle}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
        <motion.button onClick={() => setSelectedId(null)} />
      </motion.div>
    )}
  </AnimatePresence>

