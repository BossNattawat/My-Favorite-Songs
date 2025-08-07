import { AlignJustify, Music } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Songs", href: "/songs" },
  { name: "Artists", href: "/artists" },
  { name: "About", href: "/about" },
];

function Navbar() {

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AlignJustify />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="text-lg">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-2xl font-bold">
            <Music size={30}/>
            My Favorite Songs
            <Music size={30}/>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href} className="text-lg">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
