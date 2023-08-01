const fs = require("fs");
fs.writeFile(file, data[nameFile.json, options], callback)



const kdramas = [
    {
    title: "See you in my 19th life",
    year: 2023,
    platform: Netflix,
    },
    {
    title: "What's Wrong with Secretary Kim?",
    year: 2018,
    platform: Viki,
    },
    {
    title: "Business Proposal",
    year: 2022,
    platform: Netflix,
    },
    {
    title: "One Spring Night",
    year: 2019,
    platform: Netflix,
    },
    {
    title: "Doom at your service",
    year: 2021,
    platform: Netflix,
    }
  ];
  const kdramasJson = JSON.stringify(kdramas);
  fs.writeFile('kdramas.json', kdramasJson, () => {
    console.log('kdramas.json created!');})