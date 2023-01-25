import React from "react";
import Navigation from "../global/Navigation";
import Footer from "../global/Footer";

export default function CoreLayout({ children }) {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <form name="ContactForm" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <Navigation />
      <div className="relative pb-16 sm:pb-24">
        <main className="mx-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
