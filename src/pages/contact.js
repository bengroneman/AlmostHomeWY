import * as React from "react"
import { ExternalLinkIcon } from '@heroicons/react/solid'
import CoreLayout from "../components/layouts/CoreLayout";
import Hero from "../components/Hero";
import ContactForm from "../components/forms/ContactForm";
import aboutImage from "../images/Almost-Home-2.jpeg";
import {getHyGraphContent} from "../utils/utils";

const Contact = () => {
  const [contactPage, setContactPage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
        const query = `
          query ContactPage {
              contactPage(where: {id: "cld10o0q7dm3x0alqjr93kumh"}) {
                id
                hero {
                  subHeader
                  header
                }
              }
            }
        `;
      getHyGraphContent(query).then((content) => {
          setContactPage(content.data.contactPage);
          setLoading(false);
      });
  }, []);
  if (!loading) {return (
    <CoreLayout>
       <Hero title={contactPage.hero.header}>
         <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
           {contactPage.hero.subHeader}
         </p>
       </Hero>
      {/* Contact Section */}
      <div className="relative bg-white">
        <div className="relative py-16 mx-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8 md:col-span-1">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's work together</h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear
                from you! Send us a message using the form opposite, or email us.
              </p>
              <ContactForm />
            </div>
          </div>
      <div className="lg:pr-8 md:col-span-1">
        <img
          className="h-24 max-w-xl object-cover lg:absolute lg:h-fit"
          src={aboutImage}
          alt="almost home yard sale event with family"
        />
      </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-cyan-500 max-w-full">
        <div className="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block text-white">Looking to make an impact?</span>
            <span className="block text-grape-900">Donate today.</span>
          </h2>
          <a
            href="/donate"
            className="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-grape-600 hover:bg-grape-50 sm:w-auto"
          >
            <span>Donate</span>
          </a>
        </div>
      </div>
    </CoreLayout>
  )} else {return <div>Loading...</div>}
}
export default Contact
