import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("default_service", "template_839gh0k", form.current, {
        publicKey: "sYAeNxhcFXXHTNsYU",
      })
      .then(
        () => {
          // Clear the form
          form.current.reset();
          // Show success alert
          window.alert("Email sent successfully!");
        },
        (error) => {
          // Show failure alert
          window.alert("Failed to send email. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="hidden md:flex relative w-1/2 bg-yellow-200 bg-getintouch bg-cover">
          <div className="absolute bottom-12 md:left-8 lg:left-36 bg-white space-y-4 text-green-900 h-56 border-b-4 border-green-900 w-52 p-6 font-semibold text-lg mx-auto flex flex-col justify-center items-center">
            <i className="fa-solid fa-phone-volume text-4xl"></i>
            <p className="text-center">Get this free for contact now</p>
            <p> +91 89289 13992 </p>
          </div>
        </div>

        <div className="md:w-2/3 lg:w-1/2 flex justify-center items-center bg-green-900 py-2 sm:py-8 md:py-16">
          <Card className="bg-gray-300 p-8 rounded-sm" shadow={false}>
            <h2 className="text-lg lg:text-2xl text-green-900 text-center">
              Contact us
            </h2>
            <h1 className="text-2xl lg:text-4xl mx-auto py-2 font-bold text-gray-900">
              Get In Touch
            </h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="field mb-4">
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>

              <div className="field mb-4">
                <label
                  htmlFor="user_message"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Message
                </label>
                <input
                  type="text"
                  name="user_message"
                  id="user_message"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>

              <div className="field mb-4">
                <label
                  htmlFor="user_address"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Address
                </label>
                <input
                  type="text"
                  name="user_address"
                  id="user_address"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div className="field mb-4">
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>

              <div className="field mb-4">
                <label
                  htmlFor="user_phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Phone
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                id="button"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Send Email
              </button>
            </form>
          </Card>
        </div>
      </div>

      {/* Additional contact information */}
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:py-2 lg:gap-2 lg:px-8 bg-gray-200 rounded-md">
        <div className="flex w-full lg:w-full sm:w-3/4 justify-start items-center space-x-8 px-4 p-4 border-b-4 lg:border-b-0 lg:border-r-4  border-gray-400">
          <div className="bg-gray-900 size-12 sm:size-16 rounded-full flex items-center justify-center">
            <i className="rounded-full sm:text-3xl text-white fa-solid fa-phone-volume"></i>
          </div>
          <div>
            <h2 className="text-gray-900 font-bold text-xl">Call Now</h2>
            <p>+91 89289 13992</p>
          </div>
        </div>

        <div className="flex w-full lg:w-full sm:w-3/4 justify-start items-center space-x-8 px-4 p-4 border-b-4 lg:border-b-0 lg:border-r-4  border-gray-400">
          <div className="bg-gray-900 size-12 sm:size-16 rounded-full flex items-center justify-center">
            <i className="rounded-full sm:text-3xl text-white fa-regular fa-envelope"></i>
          </div>
          <div>
            <h2 className="text-gray-900 font-bold text-xl">Email Us</h2>
            <p> contact@organicmatki.in </p>
          </div>
        </div>

        <div className="flex w-full lg:w-full sm:w-3/4 justify-start items-center space-x-8 px-4 p-4 border-b-4 lg:border-b-0 border-gray-400">
          <div className="bg-gray-900 size-12 sm:size-16 rounded-full flex items-center justify-center">
            <i className="rounded-full sm:text-3xl text-white fa-solid fa-location-dot"></i>
          </div>
          <div>
            <h2 className="text-gray-900 font-bold text-xl">Location</h2>
            <p>Bundelkhand </p>
          </div>
        </div>
      </div>
    </>
  );
}