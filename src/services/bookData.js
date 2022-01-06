// fetching data from api
export const fetchBookData = (name) => {
  return new Promise(async function (resolve, reject) {
    try {
      const topBooks = await fetch(
        `http://openlibrary.org/search.json?q=${name}&limit=10`
      )
        .then((response) => {
          return response.json();
        })
        .then((actualData) => {
          if (actualData.docs) {
            return actualData.docs;
          } else {
            throw reject("Error");
          }
        })
        .catch((err) => {
          throw reject(err);
        });
      resolve(topBooks);
    } catch (error) {
      throw reject(error);
    }
  });
};
