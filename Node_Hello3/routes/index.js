var express = require("express");
var router = express.Router();

const moment = require("moment");

// 대문자 소문자로 시간 분 나타냄
router.get("/", function (req, res) {
  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");
  res.render("index", { title: "반갑습니다!!", date: date, time: time });
});

router.post("/", function (req, res) {
  let name = req.body.name;

  // 홍길동
  let title = name + "님 반갑습니다!";

  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");

  res.render("index", { title: title, date: date, time: time });
});

module.exports = router;
