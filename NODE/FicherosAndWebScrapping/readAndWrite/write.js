console.log("hola");

const fs = require("fs");

fs.writeFile;

const kdramas = [
  {
    title: "See you in my 19th life",
    year: 2023,
    platform: "Netflix",
  },
  {
    title: "What's Wrong with Secretary Kim?",
    year: 2018,
    platform: "Viki",
  },
  {
    title: "Business Proposal",
    year: 2022,
    platform: "Netflix",
  },
  {
    title: "One Spring Night",
    year: 2019,
    platform: "Netflix",
  },
  {
    title: "Doom at your service",
    year: 2021,
    platform: "Netflix",
  },
];

const kdramaJson = JSON.stringify(kdramas);

fs.writeFile("kdrama.json", kdramaJson, () => {
  console.log("json de doramas creado");
});
