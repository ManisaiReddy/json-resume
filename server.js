const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const session = require("express-session");
const puppeteer = require("puppeteer");

const app = express();
const port = 3000;
const secretKey = crypto.randomBytes(64).toString("hex");
const dataFilePath = path.join(__dirname, "data", "allUsersData.json");

// Ensure the data directory exists
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Initialize the JSON file to be empty on server start
fs.writeFileSync(dataFilePath, JSON.stringify({}), "utf8");

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// serve the landing page of application
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

// serve forms page when /forms get called

app.get("/forms", (req, res) => {
  res.sendFile(__dirname + "/public/forms/macchiato.html");
});

//post method to submit the data/store data in the current json

app.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Save updated data
  fs.writeFile(
    dataFilePath,
    JSON.stringify(formData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.json(formData);
    }
  );
});

// app.get('/generate-pdf', (req, res) => {
//   exec('npm run export', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return res.status(500).send('Error generating PDF');
//     }

//     // Assuming your export script outputs the PDF data to stdout
//     const pdfData = stdout;

//     // Set content type and send PDF data directly
//     res.setHeader('Content-Type', 'application/pdf');
//     res.send(pdfData);
//   });
// });



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
