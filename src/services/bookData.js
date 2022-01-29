// fetching data from api
export const fetchBookData = (name) => {
  return new Promise(function (resolve, reject) {
    try {
      fetch(`http://openlibrary.org/search.json?q=${name}&limit=10`)
        .then((response) => {
          return response.json();
        })
        .then((actualData) => {
          if (actualData && actualData.docs) {
            resolve(actualData.docs);
          } else {
            throw new Error("oohh my godd error")
          }
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
};
