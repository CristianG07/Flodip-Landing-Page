import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// images
import { logo } from '../../assets/img'
// data
import { nav_links } from '../../data/data'
// icons
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { NavbarMobile } from './NavbarMobile'

export const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const activeNavbar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <motion.header
      className={`${
        sticky ? 'bg-white shadow-lg h-20' : 'bg-transparent h-24'
      } z-50 fixed top-0 w-full duration-700`}
    >
      <nav className='h-full flex justify-between items-center w-[90%] mx-auto'>
        <Link to='inicio' className='max-w-36'>
          <motion.img src={logo} alt='logo' />
        </Link>
        <motion.ul className='hidden lg:flex gap-5 lg:gap-8 font-semibold text-base md:text-lg'>
          {nav_links.map((nav_item, i) => (
            <motion.li key={i} className='hover_primary uppercase'>
              <Link to={nav_item.link}>{nav_item.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div className='hidden lg:block'>
          <motion.div>
            <Link to='contacto' className='btn_primary'>
              Contactanos
            </Link>
          </motion.div>
        </motion.div>
        <button
          onClick={() => activeNavbar()}
          className='block lg:hidden hover_primary'
        >
          <FaBars size={30} />
        </button>
      </nav>
      <NavbarMobile isOpen={isOpen} activeNavbar={activeNavbar} />
    </motion.header>
  )
}
