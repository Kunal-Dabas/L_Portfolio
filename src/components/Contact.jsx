import React from "react";

const Contact = () => {
    let text1 = "Let's Collaborate";
    const text2 = "Thanks :)"

    const changeBtnTitle = () => {
        text1 = text2;
    }

  return (
    <div name='contact' className='w-full h-screen bg-[#061337] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/b81b07cd-b4c9-42aa-bc2c-5eca71a0e93b" method="post" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300  hover:border-white hover:text-pink-600 duration-300">
            Contact Me
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email @
            kunal.dabas2003@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded  focus:outline-none  focus:border-red-500 focus:ring-1 focus:ring-red-500 "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded focus:outline-none  focus:border-green-500 focus:ring-1 focus:ring-green-500"
          name="message"
          rows="10"
          placeholder="Message"
        >  </textarea>
        <button onClick={changeBtnTitle} className=" rounded-full text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          {text1}
        </button>
      </form>

    </div>
  );
};
export default Contact;
