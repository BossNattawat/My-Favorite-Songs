import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Songs", href: "/songs" },
  { name: "Artists", href: "/artists" },
  { name: "About", href: "/about" },
];

function Navbar() {

  return (
    <nav className="navbar md:p-8 border-b border-dashed border-gray-500">
      <div className="navbar-start w-full">
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
        <Link to={"/"} className="text-xl w-full text-[#F6EDD8] md:text-5xl font-bold flex gap-x-3">
            My Favorite Songs
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex w-full">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href} className="md:text-2xl xl:text-3xl text-[#F6EDD8] font-semibold">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
