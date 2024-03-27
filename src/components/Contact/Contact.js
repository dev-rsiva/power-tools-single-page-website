import React from "react";

const Contact = ({ refs }) => {
  const handleCallButtonClick = () => {
    console.log("calling");
    const phoneNumber = "09363031126";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      id="contactUs"
      ref={refs?.contactSection}
      className="pb-[100px] px-4 md:px-28 lg:px-44 font-Rubik lg:text-lg text-base text-white"
    >
      <h2
        id="ContactUs-title"
        className="text-4xl font-Rubik font-light text-primOrange px-auto py-4 my-4
            lg:text-justify text-center"
      >
        Contact Us
      </h2>

      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="flex flex-col pb-8 lg:mr-10">
          <p className="min-[1240px]:whitespace-nowrap mr-4 font-thin text-xl md:font-thin md:text-2xl">
            Managing Director/Owner : P. Ramanathan{" "}
          </p>
          <p className="min-[1240px]:whitespace-nowrap mr-4 font-thin text-xl md:font-thin md:text-2xl">
            Phone : +91 9363031126/+91 9363021126
          </p>
        </div>

        <div className="w-full flex justify-center">
          <form className="w-[420px] min-[1240px]:w-full flex flex-col">
            <div className="w-full flex justify-between flex-wrap min-[1240px]:flex-nowrap">
              <div className="flex flex-col w-full mr-3 pb-4">
                <label for="Name" className="">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full bg-[#231F20] border rounded border-[#CCCCCC]"
                />
              </div>

              <div className="flex flex-col w-full mr-3 pb-4">
                <label for="PhoneNumber" className="">
                  Phone Number *
                </label>
                <input
                  type="text"
                  className="w-full bg-[#231F20] border rounded border-[#CCCCCC]"
                />
              </div>
            </div>

            <div className="flex flex-col mr-3 pb-4">
              <label for="email" className="">
                Email
              </label>
              <input
                type="text"
                className="w-full bg-[#231F20] border rounded border-[#CCCCCC]"
              />
            </div>

            <div>
              <div className="flex flex-col mr-3 pb-4">
                <label for="subject" className="">
                  Subject
                </label>
                <input
                  type="text"
                  className="bg-[#231F20] border rounded border-[#CCCCCC]"
                />
              </div>

              <div className="flex flex-col mr-3 pb-4">
                <label for="message">Your Message</label>
                <input
                  type="text"
                  className="bg-[#231F20] border rounded border-[#CCCCCC]"
                />
              </div>
            </div>

            <div>
              <input
                type="submit"
                value="Submit"
                className="bg-blue-900 rounded px-4 py-1"
                onClick={handleCallButtonClick}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
