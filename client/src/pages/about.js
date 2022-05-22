import * as React from 'react';
import CoreLayout from "../components/layouts/CoreLayout"
import Hero from '../components/Hero'
import heroImage from "../images/Almost-Home-1.jpeg";

const About = () => {
    const [aboutContent, setAboutContent] = React.useState(null);
    let [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('http://localhost:1337/api/about')
            .then(res => res.json())
            .then(data => {
                setAboutContent(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="w-full">
            {loading
                ? <div>Loading...</div>
                :
                <CoreLayout>
                    <Hero title={aboutContent.data.attributes.Header}>
                        {aboutContent.data.attributes.Subheader}
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
                                        {aboutContent.data.attributes.Content}
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

export default About
