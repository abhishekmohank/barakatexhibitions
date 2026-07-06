import Header from "../Components/Header";
import himanshu from "../assets/images/himanshu.jpg";
//import gallery1 from "../assets/images/gallery1.jpg";
import CeoImg from "../assets/images/Chandtan.jpg";
import GMImage from "../assets/images/Anil.jpg";
import Srinu from "../assets/images/Srinu.jpg";
import Footer from "../Components/Footer";

const team = [
  {
    name: "Chandran Bepu",
    role: "CEO",
    img: CeoImg,
    reverse: false,
    dark: false,
    bio: `Mr. Chandran Bepu, CEO of Shams Al Barakat Exhibitions journey started as a migrant which began in early 1998 when he joined the Crown Plaza Group, marking the start of his career in the hospitality industry. With a strong dedication and drive, he ventured into investing in the Barakat Electromechanical Company in 2008. Under his leadership, the company has experienced significant growth, expanding from just 5 staff members, including Mr. Chandran, to over 120 employees and 300 subcontractors. The evolution of Barakat Electromechanical into the Barakat Group, with entities like Shams Al Barakat Exhibition LLC under its umbrella, is a testament to Mr. Chandran‘s commitment and hard work, which have culminated in the success of his business ventures. In 2023, Mr. Chandran was honored by the UAE government with the prestigious Golden Visa, recognizing his valuable contributions to the country‘s economy as a foreign investor. Additionally, serving as the Secretary of the Indian Social Center in Ajman, he played a pivotal role in facilitating the return of over 2,000 individuals and families to their home countries during the challenging times of the COVID-19 pandemic. The organization, under his guidance, also extended essential aid such as food and medicine to those in need, showcasing his compassion and community spirit. Mr. Chandran Bepu Chaliyan firmly believes in the power of mindset, determination, and effort to achieve success. His philosophy that "nothing is impossible" when these three elements align in one‘s pursuit of goals reflects his optimistic outlook on life. By embodying a strong mental attitude, a passionate heart, and a diligent work ethic, Mr. Chandran finds motivation to reach his objectives with confidence and enthusiasm. This unwavering belief serves as a guiding principle for him, inspiring others and exemplifying the potential for achieving success through perseverance and positivity`,
  },
  {
    name: "ANIL",
    role: "General Manager",
    img: GMImage,
    reverse: true,
    dark: true,
    bio: `Mr. Anil Bepu the GM of Barakat Exhibitions is an experienced professional with a rich and diverse background in exhibitions and events planning, boasting over twenty years of experience in the industry. Throughout his career, he has demonstrated a strong ability to deliver exceptional results consistently, particularly in executing large retail exhibitions and events. His hands-on experience in managing country pavilions at renowned events like Global Village and Trade Centre in Dubai and the Sheikh Zayed Festival in Abu Dhabi, Country Pavilions including China, Africa, India, GCC, and Thailand has equipped him with invaluable insights and a profound understanding of the complexities inherent in exhibition planning and execution. With a proven track record of success and a wealth of expertise, Mr. Anil Bepu is well-equipped to bring creativity, professionalism, and meticulous attention to detail to any project he undertakes, ensuring the seamless delivery of high-quality exhibitions and events that leave a lasting impact on Exhibitors and visitors alike.`,
  },
  {
    name: "Srinu Y",
    role: "Operations Manager",
    img: Srinu,
    reverse: false,
    dark: true,
    bio: `With a rich and diverse background in exhibitions and events planning, Mr. Srinu can bring a wealth of experience and a proven track record of success to the table. Over the course of seventeen years, he has expertise in executing large retail exhibitions and events, showcasing his ability to deliver exceptional results time and time again. His hands-on experience in managing country pavilions such as Europe, Turkey, India, GCC, and Morocco at prestigious events such as Global Village in Dubai and the Sheikh Zayed Festival in Abu Dhabi has provided him with invaluable insights and a deep understanding of the intricacies involved in event planning and execution. His passion for creating immersive and engaging experiences for attendees drives him to constantly push the boundaries of creativity and innovation in his work. He excels at managing multiple tasks simultaneously, ensuring that every aspect of an event is meticulously planned and flawlessly executed.`,
  },
  {
    name: "Himanshu",
    role: "Manager Operations",
    img: himanshu,
    reverse: true,
    dark: false,
    bio: `With eight years of expertise in the exhibitions and events field, Mr. Himanshu has a proven track record of being detail-oriented and dedicated to delivering high-quality experiences for clients. His strong ability to build and maintain relationships with clients has allowed him to successfully execute numerous exhibitions and events to their fullest potential. He has hands-on experience in assisting and managing country pavilions at prestigious events such as Global Village in Dubai and the Sheikh Zayed Festival in Abu Dhabi. Through his role in these events, he has honed his skills in coordinating logistics, managing resources effectively, and ensuring that all aspects of the event run smoothly. With a passion for creating memorable experiences and a commitment to excellence, he strives to bring creativity, professionalism, and a keen eye for detail to every project he undertakes.`,
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#a7a9c6]">
        <Header />
      </div>

      <section className="px-6 md:px-10 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#822168] mb-3">
            Who We Are
          </p>
          <h1 className="font-satoshi text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-base lg:text-lg leading-relaxed text-gray-600">
            Shams Al Barakat Exhibitions LLC is a renowned company in the
            exhibition industry, known for its expertise in organizing and
            managing top-tier exhibitions and trade shows. With a strong
            commitment to excellence and professionalism, Shams Al Barakat
            Exhibitions has established itself as a strong player in the
            field. Shams Al Barakat Exhibitions has been at the forefront of
            the exhibition industry for several years.
            <br />
            <br />
            Our focus is on providing a platform for retail businesses to
            showcase their offerings, engage with customers, and expand their
            market presence through exhibitions and trade shows in the UAE
            and other Countries. We place great importance on creating
            immersive and impactful experiences that resonate with visitors
            long after the event. At Shams Al Barakat Exhibitions, we take
            pride in our meticulous attention to detail and our ability to
            customize each event to align with the unique goals and
            requirements of our exhibitors and partners. Our seasoned team
            collaborates closely with exhibitors to ensure flawless execution
            and successful outcomes. Leveraging our extensive industry
            network and in-depth market insights, Shams Al Barakat
            Exhibitions designs exhibitions and events that attract a diverse
            audience and foster valuable business connections. Our ultimate
            goal is to provide a platform where exhibitors can engage with
            end users and drive business growth effectively.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 px-6 md:px-10 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c98bb3] mb-3">
            Where We're Headed
          </p>
          <h1 className="font-satoshi text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Our Vision
          </h1>
          <p className="text-base lg:text-lg leading-relaxed text-gray-300">
            Our vision at Shams Al Barakat Exhibitions is to lead the way in
            the exhibition and event industry, known for our unmatched
            creativity, flawless execution, and exceptional customer service.
            We are dedicated to crafting immersive and unforgettable
            experiences that captivate audiences, foster connections, and
            leave a lasting impression. We aspire to a future where our
            company is synonymous with innovation and excellence in our
            field. Through our expertise and meticulous attention to detail,
            we aim to not just meet but exceed the expectations of our
            clients, helping to elevate their brands and achieve their
            goals. We are committed to remaining at the forefront of industry
            trends and technologies, continuously pushing boundaries to
            deliver unique and engaging experiences. Our team of skilled
            professionals will continue to refine their talents, ensuring
            that we consistently deliver events of the highest quality that
            set new industry benchmarks. As a socially responsible company,
            we also envision leveraging our platform to champion
            sustainability and environmental awareness. We are dedicated to
            minimizing our ecological footprint and promoting eco-conscious
            practices in all aspects of our operations.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="text-center mb-14 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#822168] mb-3">
            The People Behind It
          </p>
          <h1 className="font-satoshi text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Meet the Team
          </h1>
        </div>

        <div className="flex flex-col">
          {team.map((member) => (
            <div
              key={member.name}
              className={`flex flex-col ${
                member.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10 px-6 md:px-16 py-14 ${
                member.dark ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="md:w-3/5">
                <h2
                  className={`font-satoshi text-2xl lg:text-3xl font-bold tracking-tight mb-1 ${
                    member.dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#822168] mb-5">
                  {member.role}
                </p>
                <p
                  className={`leading-relaxed text-base ${
                    member.dark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {member.bio}
                </p>
              </div>
              <div className="flex flex-col items-center shrink-0">
                <img
                  className="w-64 md:w-80 h-auto object-contain rounded-2xl shadow-lg"
                  src={member.img}
                  alt={member.name}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#002e5d] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default About;
