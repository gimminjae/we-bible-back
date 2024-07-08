var express = require("express");
const bibleService = require("../util/bible");
var router = express.Router();

/* GET users listing. */
router.get("", async function (req, res, next) {
  const { book, chapter } = req.query;

  const result = await bibleService.get(book, chapter);
  console.log("result: ", result);

  res.send(result);
});

module.exports = router;
