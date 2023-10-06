import { Fragment } from "react";
import CardProducts from "../component/Fragments/CardProducts";
import Button from "../component/Elements/Button";

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

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handlerLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-black" onClick={handlerLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProducts key={product.id}>
            <CardProducts.Header image={product.image} />
            <CardProducts.Body name={product.name}>
              {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price} />
          </CardProducts>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPage;
