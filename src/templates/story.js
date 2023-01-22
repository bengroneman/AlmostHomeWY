import React from "react"
import CoreLayout from "../components/layouts/CoreLayout"

const Story = ({pageContext: {story } }) => (
  <CoreLayout>
    <div>
      <h1>{story.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: story.body.html }} />
    </div>
  </CoreLayout>
)

export default Story;
