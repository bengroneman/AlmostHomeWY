import React from 'react';
import CoreLayout from "../components/layouts/CoreLayout"
import Hero from '../components/Hero'
import heroImage from "../images/Almost-Home-1.jpeg";
import Quote from "../components/Quote";
import { getHyGraphContent } from "../utils/utils";

export default function About() {
    const [aboutContent, setAboutContent] = React.useState(null);
    let [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
          const query = `
          query AboutPage {
          aboutPage(where: {id: "cld0zjj8xdb1b0alqwa834f7r"}) {
            id
            hero {
              header
              subHeader
            }
            quotes {
              ... on Quote {
                id
                author
                body
              }
            }
          }
        }
        `
      getHyGraphContent(query).then((content) => {
          setAboutContent(content.data.aboutPage);
          setLoading(false);
      });
  }, []);

    return (
        <div className="w-full">
            {loading
                ? <div>Loading...</div>
                :
                <CoreLayout>
                    <Hero title={aboutContent.hero.header}>
                        {aboutContent.hero.subHeader}
                    </Hero>
                    <div className="relative bg-white mt-12">
                        <div className="lg:absolute lg:inset-0">
                            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                                <img
                                    className="h-56 w-full object-cover lg:absolute lg:h-full"
                                    src={heroImage}
                                    alt="almost home yard sale event with family"
                                />
                            </div>
                        </div>
                        <div
                            className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                            <div className="lg:col-start-2 lg:pl-8">
                                <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                    <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">People
                                        helping people</h2>
                                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        Our Mission
                                    </h3>
                                    <div className="mt-5 prose prose-indigo text-gray-500">
                                        {aboutContent.quotes.map((index, item) => {
                                            return <Quote author={item.author} key={index}>{item.body}</Quote>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CoreLayout>
            }
        </div>
    )
}
