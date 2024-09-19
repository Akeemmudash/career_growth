import logo from "../../assets/images/logo.svg";
import { navlinks } from "../../utils";

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark-blue-600 py-20">
      <div className="container">
        <a href="#home" className="logo flex justify-center gap-4 items-center">
          <img src={logo} alt="logo" />
          <span className="text-white font-medium text-xl md:text-2xl lg:text-3xl">
            CareerGrowth
          </span>
        </a>
        <ul className="navigation__links gap-5 items-center flex-col md:flex-row justify-center md:gap-2 flex mt-14">
          {navlinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="text-white block capitalize px-4 hover:scale-105 transition-transform active:scale-95"
              >
                {link.replace("-", " ")}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
