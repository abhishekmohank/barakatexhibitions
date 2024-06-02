const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto gap-8 px-4 py-8 flex flex-col md:flex-row justify-center items-center">
        <a
          href="https://maps.app.goo.gl/FXHqaNJxntM1myCF7"
          className="flex items-center mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="30px"
            width="30px"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
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
          <div>
            <h1 className="font-semibold">Visit</h1>
            <p>Dubai-UAE</p>
          </div>
        </a>
        <div className="flex items-center mb-4 md:mb-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            height="30px"
            width="30px"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <div className="flex md:flex-col flex-row">
            <h1 className="font-semibold">Mobile:</h1>
            <p>+97150-3545972</p>
          </div>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            height="30px"
            width="30px"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <div>
            <h1 className="font-semibold">Email:</h1>
            <p>info@barakatexhibitions.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            fill="currentColor"
            viewBox="0 0 367.467 367.467"
            strokeWidth="0"
            height="30px"
            width="30px"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path d="M183.73,0.018C82.427,0.018,0,82.404,0,183.733c0,101.289,82.427,183.716,183.73,183.716 c101.315,0,183.737-82.427,183.737-183.716C367.467,82.404,285.045,0.018,183.73,0.018z M183.73,326.518 c-78.743,0-142.798-64.052-142.798-142.784c0-78.766,64.055-142.817,142.798-142.817c78.752,0,142.807,64.052,142.807,142.817 C326.536,262.466,262.481,326.518,183.73,326.518z"></path>{" "}
            <path d="M244.036,217.014c-11.737,20.141-33.562,32.635-56.956,32.635c-36.329,0-65.921-29.585-65.921-65.915 c0-36.36,29.592-65.955,65.921-65.955c23.395,0,45.219,12.54,56.956,32.641l1.517,2.627h44.28l-2.658-7.129 c-7.705-20.413-21.225-37.769-39.122-50.157c-17.942-12.42-39.017-19.009-60.973-19.009c-58.981,0-106.946,48.006-106.946,106.982 c0,58.98,47.965,106.941,106.946,106.941c21.956,0,43.03-6.567,60.973-19.006c17.897-12.391,31.417-29.741,39.122-50.154 l2.658-7.133h-44.28L244.036,217.014z"></path>{" "}
          </svg>
          <div>
            <h1 className="font-semibold">2024 by barakatexhibitions</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
