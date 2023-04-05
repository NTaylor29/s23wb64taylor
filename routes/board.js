var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, { title: Board, query: query} , next) {
  res.render("board", { title: "Board Display"}  );
  let query = req.query
  console.log(`rows ${query.rows}`)
  console.log(`cols ${query.cols}`)
});

module.exports = router;
