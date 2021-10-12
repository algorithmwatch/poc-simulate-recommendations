const fetch = require("node-fetch");
const ObjectsToCsv = require("objects-to-csv");
const faker = require("faker");

const RANDOM_IMAGE = "https://source.unsplash.com/random/300x300";

const NUM_DATA = 20;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getUnique = async (prevImage) => {
  let image = null;
  while (true) {
    image = (await fetch(RANDOM_IMAGE)).url;
    // remove tracking id and only compare URL
    if (image.split("?")[0] !== prevImage.split("?")[0]) {
      prevImage = image;
      break;
    } else delay(1000);
  }
  return image;
};

(async () => {
  const data = [];
  let prevImage = "";

  for (const x of [...Array(NUM_DATA).keys()]) {
    prevImage = await getUnique(prevImage);

    data.push({
      image: prevImage,
      title: faker.lorem.sentence(),
      creator: faker.name.findName(),
      cat1: Math.random(),
      cat2: Math.random(),
      cat3: Math.random(),
      length: Math.random(),
      age: Math.random(),
      likes: Math.random(),
      dislikes: Math.random(),
    });
  }

  const csv = new ObjectsToCsv(data);
  await csv.toDisk("./public/data.csv");
})();
