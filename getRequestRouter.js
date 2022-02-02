const { response } = require("express");
const express = require("express");
const router = express.Router();
const bl = require("./getRequestBL");

router.route("/").get(async (req, res) => {
  //Receive all parameters
  let campaignid = parseInt(req.query.campaignid);
  let url = req.query.url.toString();
  let clickid = req.query.clickid.toString();

  console.log(campaignid, url, clickid);

  //Cut url to get domain param

  const domainName = new URL(url).hostname.replace("www.", "");

  //Create new query string with params
  let urlModified = new URL(
    `https://e311dw00w9.execute-api.us-east-1.amazonaws.com/production/auction?campaignid=${campaignid}&url=${url}&clickid=${clickid}&domain=${domainName}`
  ).toString();

  //Send query string to BL
  let data = await bl.getRespJson(urlModified);

  //Send the responce with the url to the Client

  res.send(data);
});

module.exports = router;
