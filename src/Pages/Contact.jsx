import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#a7a9c6]">
        <Header />
      </div>
      <div>
        <section className="text-gray-700 body-font relative">
          <div>
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/appvzAl2SNyfRNk0s/shr9nBdNAY7dyq17U?backgroundColor=cyanDusty"
              border="0"
              width="100%"
              height="800"
              style={{ background: "transparent", border: "1px solid #ccc" }}
              title="Airtable Form"
            />
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center flex flex-row items-center justify-center gap-6">
            <p className="leading-normal my-5">
              Shams Al Barakat Exhibitions LLC <br />
              Office: M-09 <br />
              Arabilla Building, <br />
              15C Street, Hor Al Anz East, <br />
              Dubai, UAE <br />
              <a
                href="https://maps.app.goo.gl/Luj85duGsPQ88YvU6"
                target="_blank"
                className="text-blue-500 underline"
              >
                View on Google Maps
              </a>
            </p>
            <a
              href="https://www.instagram.com/barakatexhibitions/"
              className="text-gray-500 hover:text-pink-600"
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
