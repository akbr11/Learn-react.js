import CardProducts from "../component/Fragments/CardProducts";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 1.000.000",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sequi
        asperiores quaerat eaque omnis harum repudiandae voluptatem ea officia
        totam natus corporis, magnam ullam delectus sed laudantium vitae
        mollitia rerum!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp. 4.000.000",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. `,
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProducts>
          <CardProducts.Header image={product.image} />
          <CardProducts.Body name={product.name}>
            {product.description}
          </CardProducts.Body>
          <CardProducts.Footer price={product.price} />
        </CardProducts>
      ))}
    </div>
  );
};

export default ProductPage;
