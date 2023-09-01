import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function ContactForm() {
  let navigate = useNavigate();
  const [state, handleSubmit] = useForm("mbjvordr");
  if (state.succeeded) {
    return (
      <div className="p-10 md:p-40 w-full  h-full flex flex-row justify-center align-middle">
        <div className="bg-slate-200 p-10 flex flex-col gap-10 shadow-black shadow-xl w-full md:w-fit  ">
          <div className="flex flex-row justify-center align-middle">
            <h1 className="text-xl md:text-4xl font-mono text-primary font-semibold">Thank You!</h1>
          </div>
          <div>
            <h3 className="text-center">Thanks for contacting us we will get back to you soon! 💜</h3>
          </div>
          <div className="flex flex-row justify-center align-middle w-full ">

            <div onClick={() => navigate("/")} className=" cursor-pointer text-white flex flex-row justify-center align-middle p-5 bg-primary rounded-2xl w-1/2 ">
              <ArrowBackIos />
              <p>Go Back</p>
            </div>


          </div>
        </div >
      </div >
    );
  }
  return (

    <section >
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form onSubmit={handleSubmit} class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
          </div>
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input type="text" name="message" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-primary hover:bg-purple-500">Send message</button>
        </form>
      </div>
    </section>
  )







}
function App() {
  return <ContactForm />;
}
export default App;