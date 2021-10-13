import { scaleTime, scaleLinear } from "d3-scale";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/de";
dayjs.extend(relativeTime);
dayjs.locale("de");

const latestDate = new Date();
const oldestDate = new Date().setFullYear(latestDate.getFullYear() - 1);

const toDisplayAge = scaleTime().domain([oldestDate, latestDate]);
const toDisplayLength = scaleLinear().range([1, 90]);
const toDisplayLikes = scaleLinear().range([30, 1000]);

const Item = ({
  title,
  creator,
  image,
  cat1,
  cat2,
  cat3,
  age,
  length,
  likes,
}) => {
  const max = Math.max(...[cat1, cat2, cat3]);

  return (
    <div style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}>
      <div>{title}</div>
      <div>{creator}</div>
      <div>{dayjs().to(dayjs(toDisplayAge.invert(age)))}</div>
      <div>{Math.round(toDisplayLength(length))} Minuten</div>
      <div>{Math.round(toDisplayLikes(likes))} Likes</div>
      {max == cat1 && <div>Cat 1</div>}
      {max == cat2 && <div>Cat 2</div>}
      {max == cat3 && <div>Cat 3</div>}
      <img src={image} height="100px" />
    </div>
  );
};

export default Item;
