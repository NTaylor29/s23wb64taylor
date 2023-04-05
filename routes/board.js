var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("board", { title: title, query: query});
  let query = req.query
  let title = "Board"
  console.log(`rows ${query.rows}`)
  console.log(`cols ${query.cols}`)
});

module.exports = router;
