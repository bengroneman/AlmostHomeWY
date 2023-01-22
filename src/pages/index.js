import * as React from "react"
import CoreLayout from "../components/layouts/CoreLayout";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import { Link } from "gatsby";
import {getHyGraphContent} from "../utils/utils";
import image from "../images/Almost-Home-1.jpeg";
import StoryCard from "../components/StoryCard";

const IndexPage = () => {
  const [homePage, setHomePage] = React.useState(null);
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
      const homeQuery = `
      query HomePageContent {
          homePage(where: {id: "clcz72fibhkkd09ljs74vlkfk"}) {
            title
            stage
            callsToAction {
              ... on Cta {
                id
                header
                body
                link
                image {
                  url
                }
              }
            }
            hero {
              stage
              subHeader
              header
              image {
                url
              }
            }
         }
      }`
    const storiesQuery = `
         query StoriesQuery {
          stories {
            category
            createdAt
            description
            title
            slug
            image {
              url
              width
              height
            }
          }
        } 
    `
     getHyGraphContent(homeQuery).then((content) => {
         setHomePage(content.data.homePage);
     });
      getHyGraphContent(storiesQuery).then((content) => {
        setStories(content.data.stories)
        setLoading(false);
      });

  }, []);
    if (!loading) {
    return (
    <div className="wrapper">
      <CoreLayout>
        <Hero title={homePage.hero.header} image={homePage.hero.image.url} cta={true} subTitle={homePage.hero.subHeader} />
        <div className="relative my-12 py-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">the Almost Home Organization</h2>
          </div>
        </div>

        <div className="py-12 my-12 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">About </h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {homePage.callsToAction.map((item, index) => (
                  <Cta key={index} header={item.header} body={item.body} image_url={item.image.url} ctaLink={item.link}/>
              ))}
            </dl>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
            <Hero title="Our stories" image={image}></Hero>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {stories.map((story) => (
                    <StoryCard story={story}></StoryCard>
                ))}
            </div>
        </div>

        <div className="bg-sky-100 py-12 my-12">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <span className="block">{homePage.title}</span>
              <span className="block text-sky-600">{homePage.hero.subHeader}</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link to="/donate" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"> Donate </Link>
              </div>
            </div>
          </div>
        </div>
      </CoreLayout>
    </div>
  )}
}

export default IndexPage
