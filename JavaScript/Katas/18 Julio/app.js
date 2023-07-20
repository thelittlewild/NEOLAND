const cookie = (x) => {
  if (typeof x == "string") {
    console.log("Who ate the last cookie? It was Zach!");
  } else if (typeof x == "number") {
    console.log("Who ate the last cookie? It was Monica!");
  } else {
    console.log("Who ate the last cookie? It was Monica!");
  }
};

cookie(0.5);
