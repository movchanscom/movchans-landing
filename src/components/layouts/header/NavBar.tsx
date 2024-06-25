import { HEADER_NAV_LINKS } from '@/constants';
import NavLink from '@/components/layouts/header/NavLink';

const NavBar = () => {
  return (
    <nav>
      <ul className='flex items-center'>
        {HEADER_NAV_LINKS.map((item) => (
          <NavLink key={item.title} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
