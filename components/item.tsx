const Item = ({ title, creator, image, cat1, cat2, cat3 }) => {
  const max = Math.max(...[cat1, cat2, cat3]);

  return (
    <div style={{}}>
      <div>{title}</div>
      <div>{creator}</div>
      {max == cat1 && <div>Cat 1</div>}
      {max == cat2 && <div>Cat 2</div>}
      {max == cat3 && <div>Cat 3</div>}
      <img src={image} height="100px" />
    </div>
  );
};

export default Item;
