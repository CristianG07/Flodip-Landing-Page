import { Link } from "react-scroll"

export const ListFooter = ({ link, name }) => {
  return (
    <li className='hover_primary text-text-gray w-fit'>
      <Link to={link}>{name}</Link>
    </li>
  )
}
