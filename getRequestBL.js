const axios = require("axios");
const { response } = require("express");

exports.getRespJson = function (url) {
  return new Promise((resolve, reject) => {
    let list = [];

    //Cycle to get responce 3 times from the server
    for (i = 0; i <= 3; i++) {
      axios
        .get(url, { json: true })
        .then((response) => {
          let d = response.data;
          list.push(d);
        })
        .catch((error) => {
          console.log("This is err ", error.response.status);
        });
    }

    //End of the cycle
    setTimeout(() => {
      //Sort list of JSON responses
      let sortedList = list.sort((a, b) => (a.payout < b.payout ? 1 : -1));

      resolve(sortedList[0].url);
    }, 2500);
  });
};
