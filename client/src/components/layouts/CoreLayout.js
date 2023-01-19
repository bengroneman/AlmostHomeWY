import React from "react";
import Navigation from "../global/Navigation";
import Footer from "../global/Footer";

 export default function CoreLayout({ children }) {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
        <Navigation/>
        <div className="relative pt-6 pb-16 sm:pb-24">

            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                {children}
            </main>
        </div>
        <Footer/>
    </div>
  );
}