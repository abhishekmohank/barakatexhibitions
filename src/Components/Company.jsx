import gvnight2 from "../assets/images/gvnight2.webp";

const Company = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={gvnight2}
        alt=""
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/60"></div>

      <div className="relative z-10 flex justify-center px-6 py-24 md:py-32">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl px-8 py-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#822168] mb-3">
            Who We Are
          </p>
          <h1 className="font-satoshi text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-5">
            Team of Exhibition Specialists
          </h1>
          <p className="text-base leading-relaxed text-gray-600">
            Shams Al Barakat Exhibitions LLC is the event and exhibition
            specialist based in Dubai, United Arab Emirates, engaged in
            exhibitions across the entire Middle East — Dubai, Abu Dhabi, and
            Al Ain (UAE), Madina, Jeddah, and Riyadh (Saudi Arabia), and 
            Kuwait City (Kuwait).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
