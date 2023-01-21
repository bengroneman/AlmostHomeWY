import React from "react"
import { graphql } from "gatsby"
import CoreLayout from "../components/layouts/CoreLayout"
import {getHyGraphContent} from "../utils/utils";

export default function Story() {
  const [story, setStory] = React.useState(null);
  let [loading, setLoading] = React.useState(true)

  const pathname = window.location.href.split('/').slice(-2)[0];
  console.log(pathname)
  const query = `
    query StoryQuery {
      story(where: { slug: "${pathname}"}) {
        title
        slug
        body {
          html
        }
      }
    }
  `;
  console.log(query)
  getHyGraphContent(query).then((content) => {
    setStory(content.data.story);
    setLoading(false);
  });

  return (
    <CoreLayout>
      {!loading &&
        <div>
          <h1>{story.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: story.body.html }} />
        </div>
      }
    </CoreLayout>
  )
}

