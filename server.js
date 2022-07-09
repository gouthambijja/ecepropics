const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT;
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.post("/pro", (req, res) => {
  let code = 3791;
  let s = req.body.code;
  s = s.toUpperCase();
  if (s[0] >= "0" && s[0] <= "9") {
    code = code + parseInt(s);
  } else {
    if (s.charCodeAt(0) - 65 >= 9) {
      let x = 20 + s.charCodeAt(0) - 65 - 11;
      x = x * 10 + parseInt(s[1]);
      code = code + parseInt(x);
    } else {
      let x = 10 + s.charCodeAt(0) - 65;
      x = x * 10 + parseInt(s[1]);
      code = code + parseInt(x);
    }
  }
  res.redirect(
    `https://www.cmrcetexaminations.com/BeeSERP/ERP/Admin/StudentPhotos.aspx?StudId=${code}&ColCode=0001&GrpCode=CMRCET`
  );
});
app.get("/", (req, res) => {
  res.render("propic");
});
app.listen(port || 3000, () => {
  console.log("server on");
});
