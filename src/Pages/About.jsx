import Header from "../Components/Header";
import himanshu from "../assets/images/himanshu.jpg";
//import gallery1 from "../assets/images/gallery1.jpg";
import CeoImg from "../assets/images/Chandtan.jpg";
import GMImage from "../assets/images/Anil.jpg";
import Srinu from "../assets/images/Srinu.jpg";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="h-screen">
      <div className="bg-[#a7a9c6]">
        <Header />
      </div>
      <div className="2xl:container  py-9">
        <div className="flex  flex-col 2xl:mx-auto lg:pb-16 pt-10  md:py-12 md:px-6 lg:flex-row lg:px-20 justify-center gap-8">
          <div className="w-full lg:w-9/12 flex flex-col px-10 justify-center items-center text-justify">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-10">
              About Us
            </h1>
            <p className="font-normal pb-5 text-base leading-6 text-gray-600 ">
              Shams Al Barakat Exhibitions LLC is a renowned company in the
              exhibition industry, known for its expertise in organizing and
              managing top-tier exhibitions and trade shows. With a strong
              commitment to excellence and professionalism, Shams Al Barakat
              Exhibitions has established itself as a strong player in the
              field. Shams Al Barakat Exhibitions has been at the forefront of
              the exhibition industry for several years.
              <br />
              Our focus is on providing a platform for retail businesses to
              showcase their offerings, engage with customers, and expand their
              market presence through exhibitions and trade shows in the UAE and
              other Countries. We place great importance on creating immersive
              and impactful experiences that resonate with visitors long after
              the event. At Shams Al Barakat Exhibitions, we take pride in our
              meticulous attention to detail and our ability to customize each
              event to align with the unique goals and requirements of our
              exhibitors and partners. Our seasoned team collaborates closely
              with exhibitors to ensure flawless execution and successful
              outcomes. Leveraging our extensive industry network and in-depth
              market insights, Shams Al Barakat Exhibitions designs exhibitions
              and events that attract a diverse audience and foster valuable
              business connections. Our ultimate goal is to provide a platform
              where exhibitors can engage with end users and drive business
              growth effectively.
            </p>
          </div>
          {/* <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src={gallery3}
              alt="A group of People"
            />
          </div> */}
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-8 py-10 bg-gray-900">
          <div className="w-full lg:w-9/12 flex flex-col p-10 justify-center items-center text-justify">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white  pt-3 pb-5">
              Our Vision
            </h1>
            <p className="font-normal text-base  text-gray-200 leading-8 ">
              Our vision at Shams Al Barakat Exhibitions is to lead the way in
              the exhibition and event industry, known for our unmatched
              creativity, flawless execution, and exceptional customer service.
              We are dedicated to crafting immersive and unforgettable
              experiences that captivate audiences, foster connections, and
              leave a lasting impression. We aspire to a future where our
              company is synonymous with innovation and excellence in our field.
              Through our expertise and meticulous attention to detail, we aim
              to not just meet but exceed the expectations of our clients,
              helping to elevate their brands and achieve their goals. We are
              committed to remaining at the forefront of industry trends and
              technologies, continuously pushing boundaries to deliver unique
              and engaging experiences. Our team of skilled professionals will
              continue to refine their talents, ensuring that we consistently
              deliver events of the highest quality that set new industry
              benchmarks. As a socially responsible company, we also envision
              leveraging our platform to champion sustainability and
              environmental awareness. We are dedicated to minimizing our
              ecological footprint and promoting eco-conscious practices in all
              aspects of our operations.
            </p>
          </div>
        </div>
        <div className="flex flex-col  gap-8 pt-12">
          <h1 className="text-3xl lg:text-4xl px-10 font-bold leading-9 text-gray-800 pb-4">
            Meet the Team
          </h1>
          <div className="flex md:flex-row flex-col-reverse px-10 justify-around text-justify">
            <div className="md:w-3/5 pb-10">
              <div className="pt-5">
                <h1 className="text-xl lg:text-2xl font-bold leading-9 text-gray-800 pb-4">
                  Chandran Bepu
                </h1>
                <h1 className="text-xl pb-5">CEO</h1>
              </div>
              <div>
                <p className="font-normal text-base  text-gray-600 leading-7">
                  Mr. Chandran Bepu, CEO of Shams Al Barakat Exhibitions journey
                  started as a migrant which began in early 1998 when he joined
                  the Crown Plaza Group, marking the start of his career in the
                  hospitality industry. With a strong dedication and drive, he
                  ventured into investing in the Barakat Electromechanical
                  Company in 2008. Under his leadership, the company has
                  experienced significant growth, expanding from just 5 staff
                  members, including Mr. Chandran, to over 120 employees and 300
                  subcontractors. The evolution of Barakat Electromechanical
                  into the Barakat Group, with entities like Shams Al Barakat
                  Exhibition LLC under its umbrella, is a testament to Mr.
                  Chandran&lsquo;s commitment and hard work, which have
                  culminated in the success of his business ventures. In 2023,
                  Mr. Chandran was honored by the UAE government with the
                  prestigious Golden Visa, recognizing his valuable
                  contributions to the country&lsquo;s economy as a foreign
                  investor. Additionally, serving as the Secretary of the Indian
                  Social Center in Ajman, he played a pivotal role in
                  facilitating the return of over 2,000 individuals and families
                  to their home countries during the challenging times of the
                  COVID-19 pandemic. The organization, under his guidance, also
                  extended essential aid such as food and medicine to those in
                  need, showcasing his compassion and community spirit. Mr.
                  Chandran Bepu Chaliyan firmly believes in the power of
                  mindset, determination, and effort to achieve success. His
                  philosophy that &quot;nothing is impossible&quot; when these
                  three elements align in one&lsquo;s pursuit of goals reflects
                  his optimistic outlook on life. By embodying a strong mental
                  attitude, a passionate heart, and a diligent work ethic, Mr.
                  Chandran finds motivation to reach his objectives with
                  confidence and enthusiasm. This unwavering belief serves as a
                  guiding principle for him, inspiring others and exemplifying
                  the potential for achieving success through perseverance and
                  positivity
                </p>
              </div>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className=" w-64" src={CeoImg} alt="CEO Img" />

              <p className=" font-medium text-xl leading-5 text-gray-800 mt-4">
                Chandran Bepu
              </p>
            </div>
          </div>
          <div className="flex md:flex-row-reverse px-10  py-10 flex-col-reverse justify-around bg-gray-900 text-justify">
            <div className="md:w-3/5">
              <div className="pt-5">
                <h1 className="text-xl lg:text-2xl font-bold leading-9 text-gray-100 pb-4">
                  ANIL
                </h1>
                <h1 className="text-xl pb-5 text-gray-200">General Manager</h1>
              </div>
              <div className="pb-10">
                <p className="font-normal text-base  text-gray-300 leading-7">
                  Mr. Anil Bepu the GM of Barakat Exhibitions is an experienced
                  professional with a rich and diverse background in exhibitions
                  and events planning, boasting over twenty years of experience
                  in the industry. Throughout his career, he has demonstrated a
                  strong ability to deliver exceptional results consistently,
                  particularly in executing large retail exhibitions and events.
                  His hands-on experience in managing country pavilions at
                  renowned events like Global Village and Trade Centre in Dubai
                  and the Sheikh Zayed Festival in Abu Dhabi, Country Pavilions
                  including China, Africa, India, GCC, and Thailand has equipped
                  him with invaluable insights and a profound understanding of
                  the complexities inherent in exhibition planning and
                  execution. With a proven track record of success and a wealth
                  of expertise, Mr. Anil Bepu is well-equipped to bring
                  creativity, professionalism, and meticulous attention to
                  detail to any project he undertakes, ensuring the seamless
                  delivery of high-quality exhibitions and events that leave a
                  lasting impact on Exhibitors and visitors alike.
                </p>
              </div>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className=" w-64" src={GMImage} alt="GM Img" />

              <p className=" font-medium text-xl leading-5 text-gray-200 mt-4">
                Anil
              </p>
            </div>
          </div>
          <div className="flex md:flex-row -mt-10 px-10 flex-col-reverse justify-around bg-gray-900 text-justify">
            <div className="md:w-3/5">
              <div className="pt-5">
                <h1 className="text-xl lg:text-2xl font-bold leading-9 text-gray-100 pb-4">
                  Srinu Y
                </h1>
                <h1 className="text-xl pb-5 text-gray-200">
                  Operations Manager
                </h1>
              </div>
              <div>
                <p className="font-normal text-base  text-gray-300 leading-7">
                  With a rich and diverse background in exhibitions and events
                  planning, Mr. Srinu can bring a wealth of experience and a
                  proven track record of success to the table. Over the course
                  of seventeen years, he has expertise in executing large retail
                  exhibitions and events, showcasing his ability to deliver
                  exceptional results time and time again. His hands-on
                  experience in managing country pavilions such as Europe,
                  Turkey, India, GCC, and Morocco at prestigious events such as
                  Global Village in Dubai and the Sheikh Zayed Festival in Abu
                  Dhabi has provided him with invaluable insights and a deep
                  understanding of the intricacies involved in event planning
                  and execution. His passion for creating immersive and engaging
                  experiences for attendees drives him to constantly push the
                  boundaries of creativity and innovation in his work. He excels
                  at managing multiple tasks simultaneously, ensuring that every
                  aspect of an event is meticulously planned and flawlessly
                  executed.
                </p>
              </div>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className=" w-64" src={Srinu} alt="Operation Manger's Img" />

              <p className=" font-medium text-xl leading-5 text-gray-200 mt-4 py-10">
                Srinu
              </p>
            </div>
          </div>
          <div className="flex md:flex-row-reverse px-10 flex-col-reverse justify-around text-justify">
            <div className="md:w-3/5">
              <div className="pt-5">
                <h1 className="text-xl lg:text-2xl font-bold leading-9 text-gray-900 pb-4">
                  Himanshu
                </h1>
                <h1 className="text-xl pb-5"> Manager Operations</h1>
              </div>
              <div>
                <p className="font-normal text-base  text-gray-600 leading-7">
                  With eight years of expertise in the exhibitions and events
                  field, Mr. Himanshu has a proven track record of being
                  detail-oriented and dedicated to delivering high-quality
                  experiences for clients. His strong ability to build and
                  maintain relationships with clients has allowed him to
                  successfully execute numerous exhibitions and events to their
                  fullest potential. He has hands-on experience in assisting and
                  managing country pavilions at prestigious events such as
                  Global Village in Dubai and the Sheikh Zayed Festival in Abu
                  Dhabi. Through his role in these events, he has honed his
                  skills in coordinating logistics, managing resources
                  effectively, and ensuring that all aspects of the event run
                  smoothly. With a passion for creating memorable experiences
                  and a commitment to excellence, he strives to bring
                  creativity, professionalism, and a keen eye for detail to
                  every project he undertakes.
                </p>
              </div>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className=" w-64" src={himanshu} alt="Himanshu Img" />

              <p className=" font-medium text-xl leading-5 text-gray-800 mt-4">
                Himanshu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#002e5d] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default About;
