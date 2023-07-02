function Item({ name, isPacked }) {
  return (
    <div>
      {/* Make conditional with Ternary Operator */}

      <li className="item">{isPacked ? <del>{name + "✔"}</del> : name}</li>

      {/* end Make conditional with Ternary Operator */}
    </div>
  );
}

export default Item;
