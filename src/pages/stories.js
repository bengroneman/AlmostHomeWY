import React from 'react';
import CoreLayout from "../components/layouts/CoreLayout";
import Hero from "../components/Hero";
import {getHyGraphContent} from "../utils/utils";
import StoryCard from "../components/StoryCard";
import image from "../images/Almost-Home-1.jpeg";

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
            <div className="relative max-w-7xl mx-auto">
                <Hero title="Our stories" image={image}></Hero>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {stories.map((story) => (
                        <StoryCard story={story}></StoryCard>
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
