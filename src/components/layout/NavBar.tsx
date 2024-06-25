import NavLink from './NavLink';

interface NavBarProps {
  links: Array<{
    title: string;
    href: string;
  }>;
}
const NavBar = (props: NavBarProps) => {
  return (
    <nav>
      <ul className='flex items-center'>
        {props.links.map((item) => (
          <NavLink key={item.title} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
