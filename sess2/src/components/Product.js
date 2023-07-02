function Product({ name, price, discount = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <s>Rp. {price}</s> ({discount} %)
      </p>
      <p>
        <b>
          Rp. {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
        </b>
      </p>
      <hr />
    </div>
  );
}

export default Product;
