import location from "../assets/images/location.png";

const Footer = () => {
  return (
    <div className="w-full h-48 flex items-center justify-center min-w-screen">
      <div className="flex p-10 gap-10 justify-evenly items-center">
        <div className="flex flex-row">
          <div>
            <img src={location} alt="" />
          </div>
          <div className="flex flex-col">
            <h1>Visit</h1>
            <p>Al Khaleej Centre Bur Dubai </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={location} alt="" />
          </div>
          <div className="flex flex-col">
            <h1>Visit</h1>
            <p>Al Khaleej Centre Bur Dubai </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={location} alt="" />
          </div>
          <div className="flex flex-col">
            <h1>Visit</h1>
            <p>Al Khaleej Centre Bur Dubai </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={location} alt="" />
          </div>
          <div className="flex flex-col">
            <h1>Visit</h1>
            <p>Al Khaleej Centre Bur Dubai </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
