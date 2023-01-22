export const getHyGraphContent = (query) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
    }),
  };
  return fetch(
    "https://api-us-west-2.hygraph.com/v2/clcz5rk8l3uih01t840ju7w9o/master",
    options
  ).then((res) => res.json());
};

export const formatTime = (timestamp) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const datetime = new Date(timestamp);
  const year = datetime.getFullYear();
  const month = datetime.getMonth();
  const day = datetime.getDay();
  return `${months[month]} ${day}, ${year}`;
};
