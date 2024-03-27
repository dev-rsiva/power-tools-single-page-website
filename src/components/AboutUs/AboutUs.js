import about from "./aboutus_images/about.png";
const AboutUs = ({refs}) => {
  return (
    <div id="AboutUs-Container" ref={refs?.aboutSection}>
      <h2
        id="AboutUs-title"
        className="text-4xl font-Rubik font-light text-primOrange lg:px-44 px-auto py-4 my-4
        lg:text-justify text-center"
      >
        About Us
      </h2>

      <div className="md:px-28 lg:px-44 px-4">
        <div className="md:h-[400px]">
          <img src={about} alt="about" className="object-cover w-full h-full" />
        </div>
        <div className="mt-4 pb-7 font-Rubik lg:text-lg text-base">
          <p className="text-white spacing">
            Welcome to S Power Tools, your trusted destination for premium
            construction equipment in Trichy. Nestled behind Ramakrishna
            Theatre, our store stands as a testament to quality and expertise in
            the realm of power tools.
          </p>

          <p className="text-white spacing">
            Founded by Mr. Ramanathan, a stalwart with 25 years of unparalleled
            experience in core cutting services, S Power Tools is more than a
            store; it's a commitment to excellence.
          </p>

          <p className="text-white spacing my-4">
            At the heart of our offerings are state-of-the-art core cutting
            machines, meticulously curated to meet the dynamic needs of the
            construction industry. These machines, backed by Mr. Ramanathan's
            extensive knowledge, epitomize precision and efficiency.
          </p>

          <p className="text-white spacing my-4">
            Our inventory extends to demolition hammer machines, concrete
            cutting machines, and a comprehensive range of mechanical and
            chemical anchors. We understand that the devil is in the details,
            and that's why our accessory collection is second to none.
          </p>

          <p className="text-white spacing my-4">
            From core drill bits to concrete cutting blades, core bit segments
            to adaptors, every product is a testament to our dedication to
            providing the finest tools for your construction endeavors. Step
            into S Power Tools, where each purchase is a step towards quality,
            reliability, and a partnership built on trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
