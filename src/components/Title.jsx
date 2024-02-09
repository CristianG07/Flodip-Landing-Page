import { motion } from 'framer-motion'
import { fadeIn } from '../animations/Animations'

export const Title = ({ children, ...props }) => {
  return (
    <motion.h3 initial="hidden" variants={fadeIn("down", 0.5)} whileInView={'show'} className='title'>
      <span {...props}>{children}</span>
    </motion.h3>
  )
}
