import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#a7a9c6]">
        <Header />
      </div>
      <section className="text-gray-700 body-font">
        <div className="2xl:container mx-auto px-6 py-16">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 text-center pb-12">
            Contact Us
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <a
              href="https://maps.app.goo.gl/Luj85duGsPQ88YvU6"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 hover:border-[#822168] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mb-4 text-[#822168]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <h2 className="font-semibold text-gray-800 mb-2">Visit Us</h2>
              <p className="text-sm text-gray-600">
                Shams Al Barakat Exhibitions LLC <br />
                Office M-09, Arabilla Building, <br />
                15C Street, Hor Al Anz East, <br />
                Dubai, UAE
              </p>
            </a>

            <a
              href="tel:+971503545972"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 hover:border-[#822168] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mb-4 text-[#822168]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <h2 className="font-semibold text-gray-800 mb-2">Call Us</h2>
              <p className="text-sm text-gray-600">+971 50 354 5972</p>
            </a>

            <a
              href="mailto:info@barakatexhibitions.com"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 hover:border-[#822168] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mb-4 text-[#822168]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <h2 className="font-semibold text-gray-800 mb-2">Email Us</h2>
              <p className="text-sm text-gray-600">info@barakatexhibitions.com</p>
            </a>

            <a
              href="https://www.instagram.com/barakatexhibitions/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 hover:border-[#822168] transition-colors"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 mb-4 text-[#822168]"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
              <h2 className="font-semibold text-gray-800 mb-2">Follow Us</h2>
              <p className="text-sm text-gray-600">@barakatexhibitions</p>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
