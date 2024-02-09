import { logo } from '../../assets/img'
import { nav_links, social_media } from '../../data/data'
import { ListFooter } from './ListFooter'

export const Footer = () => {
  return (
    <>
      <footer className='bg-secondary grid gap-10 w-full text-sm pt-20 pb-10 text-white'>
        <div className='w-[90%] md:w-[80%] mx-auto grid justify-items-start lg:justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16'>
          <div>
            <h4 className='title_footer'>SOMOS</h4>
            <div className='max-w-56 mb-3'>
              <img src={logo} alt='logo' />
            </div>
            <p className='text_primary text-text-gray'>
              No pierdas tiempo buscando cargas, encuentra una rápida, segura y
              acorde a tus requerimientos.
            </p>
          </div>
          <div>
            <h4 className='title_footer'>Contenido</h4>
            <ul className='grid gap-1 font-semibold text-lg'>
              {nav_links.map((nav_item, i) => (
                <ListFooter key={i} {...nav_item} />
              ))}
            </ul>
          </div>
          <div>
            <h4 className='title_footer'>Síguenos</h4>
            <div className='text-3xl flex gap-5'>
              {social_media.map((icon, i) => (
                <div
                  key={i}
                  className='text-text-gray hover:text-primary transition-colors duration-700 ease-in-out'
                >
                  <a href={icon.href} target='_blank' rel='noreferrer'>
                    {icon.logo}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className='text-white/60 text-center'>
          Copyright © 2022 Flodip. All Rights reserved.
        </p>
      </footer>
    </>
  )
}
