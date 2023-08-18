import React from "react";
import contactimg from "../assets/contactimg.jpg";

import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mbjvordr");
  if (state.succeeded) {
    return (
      <p className=" text-white text-center h-[70%] w-full flex   flex-col justify-center align-middle text-5xl break-normal break-words ">
        Thanks for Contacting Us. We will get back to you!!
      </p>
    );
  }
  return (
    <div>
    <img  className="m-8 mx-8" src={contactimg}></img>
    
    <div className="  mx-5 lg:mx-auto  py:9 lg:py-16 px-4 justify-center  max-w-screen-md bg-purple-100 rounded-2xl  ">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-purple">
        Contact Us
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-black-500 dark:text-gray-400 sm:text-xl">
        Got a technical issue? Do you want to update notes or include new Let us
        know.
      </p>

      <form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          className="text-black flex flex-col  text-center  "
        >
          Email Address
        </label>
        <div class="grid gap-6 mb-6 md:grid-cols-1">
          <input
            id="email"
            type="email"
            name="email"
            className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Academia.Hub@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Type your message here"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div>
            <button
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
