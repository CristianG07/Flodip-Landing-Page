import { Link } from 'react-scroll'
import { logo } from '../../assets/img'
import { motion } from 'framer-motion'
import { fadeIn } from '../../animations/Animations'

export const Hero = () => {
  return (
    <section
      id='inicio'
      className='relative h-[500px] bg-bg-hero'
    >
      <motion.div className='containers h-full flex flex-col justify-center text-center items-center'>
        <motion.div initial="hidden" variants={fadeIn("down", 0.5)} whileInView={'show'} className='max-w-[55%] md:max-w-[35%] mt-10'>
          <img src={logo} alt='logo' />
        </motion.div>
        <motion.h1
          className='text-base text-black md:text-2xl lg:text-3xl font-bold text-pretty w-full md:w-[75%] mt-4'
        >
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 0.5)}>NO</motion.span>{' '}
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 0.6)}>PIERDAS</motion.span>{' '}
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 0.7)} className='text-primary'>
            TIEMPO
          </motion.span>{' '}
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 0.8)}>BUSCANDO</motion.span>{' '}
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 0.9)}>CARGAS,</motion.span>{' '}
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.0)}>ENCUENTRA</motion.span>{' '}
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.1)}>UNA</motion.span>{' '}
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.2)}>RÁPIDA,</motion.span>{' '}
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.3)}>SEGURA</motion.span>{' '}
          <motion.span initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.4)}>Y</motion.span>{' '}
          <motion.span className='text-primary' initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.5)}>ACORDE</motion.span>{' '}
          <motion.span className='text-primary' initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.6)}>A</motion.span>{' '}
          <motion.span className='text-primary' initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.7)}>TUS</motion.span>{' '}
          <motion.span className='text-primary' initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.8)}>REQUERIMIENTOS</motion.span>
        </motion.h1>
        <motion.div initial="hidden" whileInView={"show"} variants={fadeIn("up", 1.9)} className='mt-7'>
          <Link to='contacto' className='btn_primary'>
            Contactanos
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
