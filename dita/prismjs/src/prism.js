function jsonFetch(json, filename) {
  return new Promise(function (resolve, reject) {
    if (json) {
      return resolve(json);
    }

    fetch(JSON_PATH + filename)
      .then((response) => {
        if (!response.ok) {
          return reject(new Error(`HTTP error, status = ${response.status}`));
        }
        return response.json();
      })
      .then((data) => {
        return resolve(data);
      });
  });
}