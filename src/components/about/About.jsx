import { fadeIn } from '../../animations/Animations'
import { about_us } from '../../data/data'
import { Title } from '../Title'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id='nosotros' className='bg-secondary text-text-gray'>
      <div className='containers py-28 grid'>
        <Title className='text-white'>Nosotros</Title>
        <div className='grid gap-10 gap-y-10 max-w-xl mx-auto'>
          {about_us.map((user, i) => (
            <motion.div initial="hidden" variants={fadeIn("up", (0.6 + i / 4))} whileInView={'show'} key={i} className='px-4 sm:p-10 lg:p-7 py-7 bg-card rounded-xl shadow-lg'>
              <div className='flex gap-4 md:gap-6 items-center'>
                {/* <div className='w-24 h-24 min-w-24 rounded-full overflow-hidden border-2 border-white'>
                  <img className='object-cover min-h-full' src={user.picture} alt={user.name} loading='lazy' />
                </div> */}
                <div>
                  {/* <h5 className='text-lg md:text-3xl font-semibold text-white'>
                    {user.name}
                  </h5>
                  <p className='text-lg md:text-xl font-medium'>
                    {user.position}
                  </p> */}
                  <p className='text-lg md:text-xl font-medium'>
                    {user.mensaje}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
