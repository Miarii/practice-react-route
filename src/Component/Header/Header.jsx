import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className="w-full md:w-4/5 mx-auto px-4 md:px-0">
      <nav className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><NavLink to="/" className="hover:text-primary transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-primary transition-colors">Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-primary transition-colors">Contact</NavLink></li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-lg md:text-xl font-serif">ClothingMax</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 md:gap-4">
            <li><NavLink to="/" className="hover:text-primary transition-colors">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-primary transition-colors">About Us</NavLink></li>
            <li><NavLink to="/blog" className="hover:text-primary transition-colors">Blog</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-primary transition-colors">Contact</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary text-sm md:text-base">Subscribe Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;