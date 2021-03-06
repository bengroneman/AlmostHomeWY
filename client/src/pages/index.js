import * as React from "react"
import CoreLayout from "../components/layouts/CoreLayout";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import { Link } from "gatsby";

const IndexPage = () => {
  const [homePage, setHomePage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("http://localhost:1337/api/home?populate=*")
        .then(res => res.json())
        .then(data => {
          setHomePage(data);
          setLoading(false);
        })
        .catch(err => console.error(err))
  }, []);

  if (!loading) {return (
      <CoreLayout>
        <Hero title={homePage.data.attributes.Hero.Header}>
          {homePage.data.attributes.Hero.Subheader}
        </Hero>
        <div className="relative my-12 py-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 text-2xl font-medium text-gray-900"> Homeless to hopeful, with just a little help </span>
          </div>
        </div>

        <div className="py-12 my-12 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">About. </h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">

              {homePage.data.attributes.CTA.map((item, index) => (
                  <Cta key={index} header={item.Header} body={item.Body} />
              ))}
            </dl>
          </div>
        </div>

        <div className="relative my-12 py-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 text-2xl font-semibold text-gray-900"> Help our cause </span>
          </div>
        </div>
        <div className="bg-sky-100 py-12 my-12">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <span className="block">{homePage.data.attributes.Donate.Header}</span>
              <span className="block text-sky-600">{homePage.data.attributes.Donate.Body}</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link to="/donate" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"> Donate </Link>
              </div>
            </div>
          </div>
        </div>
      </CoreLayout>
  )} else {return <div>Loading...</div>}
}

export default IndexPage
