import { logo } from "../assets";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const navLinks = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Find Doctors", href: "/doctors" },
    { id: 3, title: "About us ", href: "/about" },
  ];
  return (
    <nav className="flex items-center justify-between bg-[#FFF7E2] px-20 py-5">
      <div className="flex items-center gap-x-20">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[220px] h-[40px]" />
        </Link>
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className={`hover:text-[#3A643B] hover:font-medium text-[17px] ${
                  location.pathname === link.href
                    ? "text-[#3A643B] font-medium"
                    : ""
                } `}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-5 text-[14px]">
        <button className="px-5 py-[6px] border border-[#3A643B] text-[#3A643B] font-medium rounded-md">
          Login
        </button>
        <button className="py-[6px] px-5 bg-[#3A643B] text-white rounded-md">
          Sign-up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
