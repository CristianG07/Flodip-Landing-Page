import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { ceo, cto } from '../assets/img'

export const nav_links = [
  { name: 'inicio', link: 'inicio' },
  { name: 'proximamente', link: 'proximamente' },
  { name: 'nosotros', link: 'nosotros' },
  { name: 'contacto', link: 'contacto' }
]

export const nav_footer = [
  { name: 'enlace 1', link: 'item1' },
  { name: 'enlace 2', link: 'item2' },
  { name: 'enlace 3', link: 'item3' },
  { name: 'enlace 4', link: 'item4' }
]

// social
export const social_media = [
  {
    logo: <FaInstagram />,
    href: 'https://www.instagram.com'
  },
  {
    logo: <FaFacebook />,
    href: 'https://www.facebook.com'
  },
  {
    logo: <FaLinkedin />,
    href: 'https://www.linkedin.com'
  },
]

export const about_us = [
  {
    name: 'Santiago Franco',
    position: 'CEO',
    picture: ceo
  },

  {
    name: 'Juan Garcia',
    position: 'CTO',
    picture: cto 
  }
]
