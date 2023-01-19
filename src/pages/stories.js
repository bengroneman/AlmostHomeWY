import React from 'react';
import CoreLayout from "../components/layouts/CoreLayout";
import Hero from "../components/Hero";
import {getHyGraphContent} from "../utils/utils";
import SecondaryBtn from "../components/global/SecondaryBtn";

export default function Stories() {
    const [stories, setStories] = React.useState(null);
    let [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
      const query = `
      query StoriesQuery {
          stories {
            body {
              html
            }
            category
            createdAt
            description
            title
            updatedAt
            slug
            stage
            image {
              url
              width
              height
            }
          }
        }
    `
    getHyGraphContent(query).then((content) => {
        console.log(content)
      setStories(content.data.stories);
      setLoading(false);
    });
  }, []);
    if (!loading) {

    return (
        <CoreLayout>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto"> <Hero title="Our stories"></Hero>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {stories.map((story) => (
                        <div key={story.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <a href={story.slug} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{story.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{story.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={story.updatedAt}>{story.updatedAt}</time>
                                            <span aria-hidden="true">&middot;</span>
                                        </div>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <SecondaryBtn link={story.slug}>Read Story</SecondaryBtn>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </CoreLayout>
    )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}
