const csv = require("csv-parser");
const misBias = [
  {
    name: "Jungkook",
    age: "25",
    group: "BTS",
  },
  {
    name: "Yeonjun",
    age: "23",
    group: "TxT",
  },
  {
    name: "San",
    age: "24",
    group: "Ateez",
  },
  {
    name: "Felix",
    age: "22",
    group: "StrayKids",
  },
  {
    name: "Kai",
    age: "29",
    group: "EXO",
  },
  {
    name: "Lisa",
    age: "26",
    group: "BlackPink",
  },

  {
    name: "Ryujin",
    age: "22",
    group: "Itzy",
  },
];
const convertCSV = (data) => {
  let csv = "";

  // vamos a leer las claves del objeto
  let headers = Object.keys(data[0]);

  // creamos las cabeceras del csv
  csv += headers.join(";") + "\n";

  /// vamos a recorreer la data y escribir la info que nos queda de los alumnos
  data.forEach((row) => {
    headers.forEach((header, index) => {
      if (index > 0) {
        csv += ";";
      }
      csv += row[header];
    });

    csv += "\n";
  });

  return csv;
};

const CSVtoFile = convertCSV(misBias);
