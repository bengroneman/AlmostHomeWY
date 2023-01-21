const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/story.js`)
  //  prepend query with `allGraphCms<APIName>
  return graphql(`
  {
    allGraphCmsStory {
      nodes {
        slug
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
        context: {
          // Add optional context data to be inserted
          // as props into the page component.
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
