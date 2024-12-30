import React from 'react'
import Link from 'next/link';

const Contact = () => {
  return (
    <div id='Contact'>
      <section className="text-black body-font relative bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231659.7485806102!2d67.08233025924677!3d24.87465467918517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731590824156!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(0.16)" }}
      />
      <div className=" bg-gray-700 relative flex flex-wrap py-6 rounded shadow-md transition-transform duration-700 ease-in-out transform hover:scale-110">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-white">
           Surjani Town karachi
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            EMAIL
          </h2>
          <Link className="text-white leading-relaxed" href="mailto:hr1228744@gmail.com">
          sana12@gmail.com</Link>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-white">021-111-111</p>
        </div>
      </div>
    </div>
    <div className=" bg-white lg:w-1/3 md:w-1/2 w-full md:py-8 mt-8 md:mt-0 border hover:border-black rounded-lg p-6">
  <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-center  text-black ">
    CONTACT
  </h2>
  <p className="leading-relaxed mb-5">
    Whether you have a question or just want to connect, I am here to help.
    Fill out the form below and I’ll get back to you as soon as possible.
  </p>
  <div className="relative mb-4">
    <label htmlFor="name" className="leading-7 text-sm text-black">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-black">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <div className="relative mb-4">
    <label htmlFor="message" className="leading-7 text-sm text-black">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      defaultValue={""}
    />
  </div>
  <div className="flex justify-center">
    <button className=" text-white border rounded-full bg-blue-700 py-2 px-6 focus:outline-none 
      text-lg font-bold hover:border-black 
      transform scale-90 transition duration-700 ease-out hover:scale-100 items-center">
      Send Message
    </button>
  </div>
</div>

  </div>
</section>

    </div>
  )
}

export default Contact
