import React from "react";

const ContactForm = () => {
  return (
    <form
      method="POST"
      name="ContactForm"
      className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      data-netlify="true"
    >
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-medium text-gray-700"
        >
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <span id="phone-description" className="text-sm text-gray-500">
            Optional
          </span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            aria-describedby="phone-description"
            className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="how-can-we-help"
            className="block text-sm font-medium text-gray-700"
          >
            How can we help you?
          </label>
          <span
            id="how-can-we-help-description"
            className="text-sm text-gray-500"
          >
            Max. 500 characters
          </span>
        </div>
        <div className="mt-1">
          <textarea
            id="how-can-we-help"
            name="how-can-we-help"
            aria-describedby="how-can-we-help-description"
            rows={4}
            className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border border-gray-300 rounded-md"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="how-did-you-hear-about-us"
          className="block text-sm font-medium text-gray-700"
        >
          How did you hear about us?
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="how-did-you-hear-about-us"
            id="how-did-you-hear-about-us"
            className="shadow-sm focus:ring-grape-500 focus:border-grape-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="text-right sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Send Message
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
