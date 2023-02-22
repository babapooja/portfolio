import React from "react";

const Contact = () => {
  const endUrl = "https://getform.io/f/2174190c-7d69-40e0-a1f0-00fc9e275982";
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white p-4"
    >
      <div className="flex flex-col p4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-400">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action={endUrl}
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              className="p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <input
              className="my-4 p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none"
              type="email"
              name="name"
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 
              rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              className="text-white 
            bg-gradient-to-b from-cyan-500 
            to-blue-500 px-6 py-3 my-8 mx-auto flex 
            items-center rounded-md hover:scale-110 
            duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
