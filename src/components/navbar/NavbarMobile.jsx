import { Link } from 'react-scroll'
import { nav_links } from '../../data/data'
import { IoClose } from "react-icons/io5";


export const NavbarMobile = ({ isOpen, activeNavbar }) => {
  return (
    <>
      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} absolute w-[80%] max-w-80 h-screen top-0 right-0 pl-10 pr-3 py-7 shadow-xl bg-white duration-700`}>
        <div className='flex justify-end mb-5'>
          <button onClick={() => activeNavbar()}>
            <IoClose size={45} />
          </button>
        </div>
        <ul className='grid gap-5 font-semibold text-lg'>
          {nav_links.map((nav_item, i) => (
            <li key={i} className='hover_primary'>
              <Link onClick={() => activeNavbar()} to={nav_item.link}>{nav_item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
