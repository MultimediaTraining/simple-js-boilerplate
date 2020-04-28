// Use this dataLoader function to fetch the data.json
export const dataLoader = (path = 'public/data.json') => {
  return fetch(path)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};
