import React from "react";
import contactnobg from "../assets/contactnobg.png";

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
    <div class="h-screen md:flex ">
      <div
        class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden m-10 rounded-lg">
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">Contact Us</h1>

          <p class="text-white mt-1">Have any suggestions regarding notes?<br />
            Facing any technical dificulties?<br />
            Do contact us.</p>

        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-60 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-60 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-transparent m-10 rounded-lg ">

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="text-white flex flex-col  text-start  "
          >
            Email Address
          </label>
          <div class="grid gap-6 mb-6 md:grid-cols-1">
            <input
              id="email"
              type="email"
              name="email"
              className="bg-white-50 border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Ex :- Academia.Hub@gmail.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label
              htmlFor="message"
              className="text-white flex flex-col  text-start mb-0 md:grid-cols-1  "
            >Message
            </label>
            <textarea
              id="message"
              name="message"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg--700 dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
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
  )







}
function App() {
  return <ContactForm />;
}
export default App;