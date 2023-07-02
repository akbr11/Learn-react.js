function Item({ name, isPacked }) {
  /* make conditional assigning JSX to variable */
  let itemContent = name;
  if (isPacked) {
    itemContent = name + "#";
  }
  /* end make conditional assigning JSX to variable */

  return (
    <div>
      {/* Make conditional with Ternary Operator */}
      <div>
        <li className="item">{isPacked ? <del>{name + "✔"}</del> : name}</li>
      </div>
      {/* end Make conditional with Ternary Operator */}

      <li className="item">{itemContent}</li>
    </div>
  );
}

export default Item;
