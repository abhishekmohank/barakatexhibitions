import logo from "../assets/images/logo-removebg.png";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between lg:w-9/12 m-auto">
      <div>
        <img src={logo} alt="" className="max-w-72" />
      </div>
      <div>
        <ul className="flex flex-row gap-10">
          <li className="hover:text-red-800 text-white font-medium">
            <a href="/About">ABOUT</a>
          </li>
          <li className="hover:text-red-800 text-white font-medium">
            <a href="/Events">EVENTS</a>
          </li>
          <li className="hover:text-red-800 text-white font-medium">
            <a href="/Gallery">GALLERY</a>
          </li>
          <li className="hover:text-red-800 text-white font-medium">
            <a href="Contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
