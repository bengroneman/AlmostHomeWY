export const getHyGraphContent = (query) => {
   const options = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          query: query
        })
      }
    return fetch("https://api-us-west-2.hygraph.com/v2/clcz5rk8l3uih01t840ju7w9o/master", options).then(res => res.json());
}