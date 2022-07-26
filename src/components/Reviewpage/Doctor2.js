import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Styles.css"
export const Doctor2 = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dwe1ulh",
        "template_ogzu25j",
        form.current,
        "iIbLa_Yq0a1YbyMkC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="text-gray-600 body-font relative">
    
 <div className="my-0 mt-16 flex justify-center ">
           <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      
      </div> 
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 imagebggg rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          
        
          <div className="bg-white  relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Indian Institute of Information Technology, Design and
                Manufacturing Jabalpur Dumna Airport Road, P.O.: Khamaria,
                Jabalpur - 482 005, Madhya Pradesh, India
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                20bec126@email@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">9453636119</p>
            </div>
          </div>
        </div>

        

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Write your suggestion and help Us in Improvement
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label
                for="user_name"
                className="leading-7 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                name="to_name"
                id="to_name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label id="from_name" className="leading-7 text-sm text-gray-600">
                Email
              </label>

              <input
                type="email"
                name="from_name"
                id="from_name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            />
          </form>
        </div>
      </div>
    </section>
  );
};
