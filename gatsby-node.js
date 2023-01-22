const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/story.js`)
  //  prepend query with `allGraphCms<APIName>
  return graphql(`
  {
    allGraphCmsStory {
      nodes {
        title
        slug
        body {
          html
        }
      }
    }
  }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allGraphCmsStory.nodes.forEach(story => {
      createPage({
        path: `stories/${story.slug}`,
        component: blogPostTemplate,
        context: { story },
      })
    })
  })
}
